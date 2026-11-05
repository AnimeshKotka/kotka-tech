# Python for AI: Syntax Cheat Sheet & Developer Lookup Guide

> **Tutorial Blog & Quick Reference**  
> *Grounded in "Python for AI - Full Beginner Course"*  
> High-density, copy-pasteable lookup guide for AI developers, covering core Python syntax, environment setups, data operations, and modern workflows.

---

## Table of Contents
1. [Environment & Setup Reference](#1-environment--setup-reference)
2. [Syntax, Variables & Data Types](#2-syntax-variables--data-types)
3. [Control Flow & Operators](#3-control-flow--operators)
4. [Data Structures (Lists, Dicts, Tuples, Sets)](#4-data-structures-lists-dicts-tuples-sets)
5. [Functions & Scope](#5-functions--scope)
6. [Modules, Packages & API Calls](#6-modules-packages--api-calls)
7. [Data Analysis & Charts (Pandas & Matplotlib)](#7-data-analysis--charts-pandas--matplotlib)
8. [Object-Oriented Programming (OOP)](#8-object-oriented-programming-oop)
9. [Error Handling & Debugging](#9-error-handling--debugging)
10. [Modern Developer Toolkit (Git, ENV, Ruff & UV)](#10-modern-developer-toolkit-git-env-ruff--uv)

---

## 1. Environment & Setup Reference

### Terminal & Environment Commands
```bash
# Verify Python version
python3 --version

# Create & Activate Virtual Environment
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
.\venv\Scripts\activate   # Windows

# Managing Packages with Pip
pip install requests pandas matplotlib python-dotenv ruff
pip freeze > requirements.txt
pip install -r requirements.txt
```

### Essential VS Code Keyboard Shortcuts
* **Run Line in Interactive Window:** `Shift + Enter` (Requires `pip install ipykernel`)
* **Run File in Terminal:** `Cmd + Enter` or `Ctrl + F5`
* **Toggle Terminal:** `Cmd + J` / `Ctrl + J`
* **Command Palette:** `Cmd + Shift + P` / `Ctrl + Shift + P`

---

## 2. Syntax, Variables & Data Types

### PEP 8 Naming Rules
* **Variables & Functions:** `snake_case` (e.g., `user_age`, `calculate_total`)
* **Classes:** `PascalCase` (e.g., `DataValidator`, `APIConfig`)
* **Constants:** `ALL_CAPS` (e.g., `MAX_RETRIES = 5`, `BASE_URL`)
* **Indentation:** Exactly 4 spaces per block level.

### Variable Assignment & Data Types
```python
# String
model_name = "gpt-4o"

# Numbers
batch_size = 32          # Integer
learning_rate = 0.001    # Float

# Booleans
is_active = True
has_error = False

# Checking Types
print(type(model_name))  # <class "str">
```

### Strings & F-Strings
```python
# F-Strings (Dynamic Format)
user_name = "Dave"
tokens = 150
summary = f"User {user_name} used {tokens} tokens."

# Essential String Methods
text = "  python for ai  "
print(text.strip())             # "python for ai" (Removes spaces)
print(text.upper())             # "  PYTHON FOR AI  "
print(text.title())             # "  Python For Ai  "
print(text.replace("ai", "ML")) # "  python for ML  "
print("python" in text)         # True (Substring test)
```

---

## 3. Control Flow & Operators

### Operators Quick Lookup
| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `x == 10` |
| `!=` | Not equal to | `status != "error"` |
| `>` / `<` | Greater / Less than | `score > 85` |
| `>=` / `<=` | Greater/Less or equal | `age >= 18` |
| `and` | True if both clauses are True | `has_key and is_active` |
| `or` | True if either clause is True | `is_admin or is_mod` |
| `not` | Inverts boolean truth value | `not is_logged_in` |

### Conditionals (`if / elif / else`)
```python
temperature = 28

if temperature > 30:
    status = "Hot"
elif temperature >= 20:
    status = "Optimal"
else:
    status = "Cold"

print(f"Status: {status}")
```

### Loops Reference
```python
# Loop N times (0 to 4)
for i in range(5):
    print(f"Iteration: {i}")

# Custom Range: range(start, stop_before, step)
for count in range(10, 0, -2):
    print(count)  # 10, 8, 6, 4, 2

# While Loop
retries = 3
while retries > 0:
    print(f"Retrying... {retries} left")
    retries -= 1
```

---

## 4. Data Structures (Lists, Dicts, Tuples, Sets)

### 1. Lists (Ordered, Mutable)
```python
# Definition
models = ["gpt-4o", "claude-3-5-sonnet", "llama-3"]

# Indexing & Slicing
first_item = models[0]       # "gpt-4o"
last_item = models[-1]       # "llama-3"
sliced_items = models[0:2]   # ["gpt-4o", "claude-3-5-sonnet"]

# Common Methods
models.append("gemini-1.5")  # Append to end
models.insert(1, "mistral")  # Insert at index 1
models.remove("llama-3")     # Remove by value
popped = models.pop(0)       # Remove by index
list_length = len(models)    # Total elements
```

### 2. Dictionaries (Key-Value Pairs)
```python
# Definition
config = {
    "model": "gpt-4o",
    "temperature": 0.7,
    "max_tokens": 1000
}

# Lookup & Modification
current_model = config["model"]           # "gpt-4o"
config["temperature"] = 0.2               # Modify value
config["stream"] = True                   # Add key

# Safe Lookup
temp = config.get("temperature", 0.5)     # Default 0.5 if missing

# Iteration
for key, value in config.items():
    print(f"{key}: {value}")
```

### 3. Tuples & Sets
```python
# Tuples (Immutable)
location = (37.7749, -122.4194)
lat, lon = location  # Unpacking

# Sets (Unique items)
raw_tags = ["ai", "python", "ai", "ml", "python"]
unique_tags = set(raw_tags)  # {"ai", "python", "ml"}
unique_tags.add("nlp")
```

---

## 5. Functions & Scope

### Function Syntax & Default Parameters
```python
def calculate_total(price: float, tax_rate: float = 0.08, discount: float = 0.0) -> float:
    """Calculates final order price including tax and optional discount."""
    subtotal = price * (1 - discount)
    final_price = subtotal * (1 + tax_rate)
    return round(final_price, 2)

# Calling with Keyword Arguments
total = calculate_total(price=100.0, discount=0.10)
print(f"Final Total: ${total}")
```

### Returning Multiple Values
```python
def get_min_max(numbers: list):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([12, 45, 2, 89, 33])
```

---

## 6. Modules, Packages & API Calls

### Import Syntax
```python
import math                  # Standard module
from math import sqrt, pi    # Specific function
import pandas as pd          # Alias import
```

### Fetching APIs with Requests
```python
import requests

url = "https://api.example.com/v1/weather"
params = {
    "latitude": 48.8566,
    "longitude": 2.3522,
    "current_weather": True
}

response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()  # Parse JSON into dictionary
    temperature = data["current_weather"]["temperature"]
    print(f"Current Temperature: {temperature}°C")
else:
    print(f"API Error: {response.status_code}")
```

---

## 7. Data Analysis & Charts (Pandas & Matplotlib)

### Data Wrangling with Pandas
```python
import pandas as pd

# Load & Inspect
df = pd.read_csv("data/sales.csv")
print(df.head())

# Calculated Column
df["Total"] = df["Quantity"] * df["Price"]
high_value_df = df[df["Total"] > 100]

# Export
df.to_csv("output/processed_sales.csv", index=False)
df.to_json("output/processed_sales.json")
```

### Plotting with Matplotlib
```python
import matplotlib.pyplot as plt

dates = ["2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04"]
revenue = [1500, 2300, 1800, 3100]

plt.figure(figsize=(8, 4))
plt.plot(dates, revenue, marker="o", color="b", label="Daily Revenue ($)")
plt.title("Q4 Revenue Performance")
plt.xlabel("Date")
plt.ylabel("USD ($)")
plt.grid(True)
plt.legend()

plt.savefig("output/revenue_chart.png", dpi=150, bbox_inches="tight")
plt.close()
```

---

## 8. Object-Oriented Programming (OOP)

### Class Definition & Methods
```python
class APIConfig:
    """Class to manage environment configuration and model parameters."""

    def __init__(self, key_name: str, model_name: str = "gpt-4o"):
        self.key_name = key_name          # Attribute
        self.model_name = model_name      # Attribute
        self.request_count = 0            # Counter attribute

    def log_request(self):
        """Instance Method to track state."""
        self.request_count += 1
        print(f"[{self.model_name}] Request #{self.request_count} logged.")

# Instantiate Object & Call Method
dev_config = APIConfig(key_name="my_config_key", model_name="gpt-4o-mini")
dev_config.log_request()  # Output: [gpt-4o-mini] Request #1 logged.
```

---

## 9. Error Handling & Debugging

### `try / except / else / finally` Structure
```python
try:
    with open("data/config.json", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("Error: Targeted file does not exist.")
except Exception as err:
    print(f"Unexpected error: {err}")
else:
    print("File content successfully loaded.")
finally:
    print("Completed file handler execution.")
```

---

## 10. Modern Developer Toolkit (Git, ENV, Ruff & UV)

### 1. Environment Variables (`.env`)
Store sensitive configuration in `.env` and add `.env` to `.gitignore`.

```python
# Reading .env in Python
import os
from dotenv import load_dotenv

load_dotenv()  # Ingests .env key-value pairs

config_value = os.getenv("APP_ENV_KEY")
print(f"Loaded config state: {config_value is not None}")
```

### 2. Git Workflow Commands
```bash
# Initialize & Add Remote
git init
git branch -M main
git add .
git commit -m "Initial commit"

# Daily Git Routine
git status
git add .
git commit -m "Updated data pipeline"
git push origin main
```

### 3. Ruff Linter & Formatter
* Install **Ruff** extension in VS Code.
* Enable **Format on Save** in VS Code settings.
* Instantly formats indentation, trailing commas, and unused imports upon saving files.

### 4. UV Package & Project Manager
```bash
# Create Project
uv init my-ai-app
cd my-ai-app

# Add & Remove Dependencies
uv add requests pandas matplotlib python-dotenv
uv remove pandas

# Sync Environment
uv sync
```

---
*Reference cheat sheet built for Python AI developers.*
