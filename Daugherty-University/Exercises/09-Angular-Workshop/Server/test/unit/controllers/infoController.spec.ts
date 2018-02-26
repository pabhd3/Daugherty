import { InfoController } from "../../../src/controllers/infoController";
import { sandbox, SinonSandbox, SinonStub } from "sinon";
import { ApplicationInfoManager } from "../../../src/managers/applicationInfoManager";
import { ApplicationInfo } from "../../../src/models/applicationInfo";
import { Request, Response } from "express";
import { Result } from "../../../src/models/response/result";
import { expect } from "chai";
import * as httpStatus from "http-status-codes";

describe("InfoController tests", () => {

  let target: InfoController;
  let sinonSandbox: SinonSandbox;
  let fakeApplicationInfoManager: Partial<ApplicationInfoManager>;
  let fakeRequest: Partial<Request>;
  let fakeResponse: Partial<Response>;

  beforeEach(() => {
    sinonSandbox = sandbox.create();

    fakeApplicationInfoManager = {
      getApplicationInfo: (): ApplicationInfo => { return new ApplicationInfo(); }
    };
    target = new InfoController(<ApplicationInfoManager>fakeApplicationInfoManager);

    fakeRequest = {
      get: sinonSandbox.stub()
    };
    fakeResponse = {};
  });

  it("getInfo returns result of ApplicationInfoManager.getApplicationInfo and HTTP Status Code of OK", () => {

    // Arrange
    const expected: ApplicationInfo = new ApplicationInfo();
    const managerStub: SinonStub =
      sinonSandbox.stub(fakeApplicationInfoManager, "getApplicationInfo")
      .returns(expected);

    // Act
    const actual: Result<ApplicationInfo> =
      target.getInfo(<Request>fakeRequest, <Response>fakeResponse);

    // Assert
    expect(actual._statusCode).to.equal(httpStatus.OK);
    expect(actual._data).to.equal(expected);
    sinonSandbox.assert.calledOnce(managerStub);
  });

});
