def modFibonacci(t1, t2, n):
    if(0 > t1 or t1 > 2 or 0 > t2 or t2 > 2 or 3 > n or n > 20):
       errorMsg = """Passed Value Error, values must be:
        0 ≤ t1, t2 ≤ 2\n\t3 ≤ n ≤ 20"""
       return errorMsg
    sequence = []
    sequence.append(t1)
    sequence.append(t2)
    for i in range(2, n+1):
        t_i = sequence[i-2] + sequence[(i-1)]*sequence[(i-1)]
        sequence.append(t_i)
    return sequence, sequence[n-1]

print(modFibonacci(0, 3, 6))