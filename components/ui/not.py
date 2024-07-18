nums = [2, 3, 4, 0, 8, 8, 9, 0, 8, 0, 2, 0]
n = len(nums)
j = 0  # Pointer to track non-zero elements

# Move all non-zero elements to the beginning of the list
for i in range(n):
    if nums[i] != 0:
        nums[j] = nums[i]
        j += 1

# Fill the remaining elements with 0
for k in range(j, n):
    nums[k] = 0

print(nums)
dcddssdsd