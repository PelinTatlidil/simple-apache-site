# Test if memory usage < 75% before proceeding with deploy 
import psutil
def get_memory_usage():
    memory_percent = psutil.virtual_memory().percent
    if memory_percent < 75:
        print("Memory usage is acceptable. Proceeding with deploy.")
    else:
        print("Memory usage is too high. Aborting deploy.")
    return memory_percent

def check_memory_threshold(limit=75): 

  usage = psutil.virtual_memory().percent

  if usage > limit:

    log_warning(f"Memory usage is high: {usage}%")

  return usage < limit

get_memory_usage()

assert check_memory_threshold(100) == True

assert check_memory_threshold(0) == False