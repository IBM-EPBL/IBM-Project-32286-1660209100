
# Python program to print square of numbers from 1 to n

n = int(input("Enter a number : "))
i = 1
while i<=n :
    print(i*i, end=" ")
    i+=1

# Pattern printing in python
print()
print("Pyramid Pattern")
for i in range(1,n+1,1):
    for j in range(1,i+1,1):
        print(i,end=" ")
    print()