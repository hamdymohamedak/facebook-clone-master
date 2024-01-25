import os

age = input("What is your age? ")

if age == "19":
    file_path = r"D:\test"  # Use raw string to handle backslashes in the file path
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"File at {file_path} removed.")
    else:
        print(f"File at {file_path} does not exist.")
else:
    print("Hello anyway.")
