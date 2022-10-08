
# Python program to mainpulate string

a = "hello"
for i in range(0,len(a),1):
    print(a[i],end="-")

print()
b = input("Enter a character : ")
count = 0
for i in range(0,len(a),1):
    if(a[i] == b):
        count+=1
print("No of ",b," = ",count)
