# HCI Principles Demo (Lab03–Lab04)

## 📌 Overview

This project demonstrates key **Human-Computer Interaction (HCI) principles** using a simple button-based web interface. The application is refactored to follow **Separation of Concerns**, where structure, style, and behavior are handled in separate files.

---

## 🎯 Objectives

* Apply HCI principles in a practical example
* Understand Separation of Concerns
* Improve code readability and maintainability

---

## 🧱 Project Structure

```
project-folder/
│── index.html   # Structure
│── styles.css   # Styling
│── script.js    # Behavior
```

---

## 🧠 HCI Principles Implemented

1. **Affordance**

   * Button design (border, cursor) suggests it is clickable

2. **Mapping**

   * Status text updates based on user action

3. **Feedback**

   * Button briefly changes color when clicked

4. **Constraint**

   * User can only click the button 3 times

5. **Signifier**

   * Disabled button changes appearance to indicate inactivity

---

## ⚙️ Separation of Concerns

* **HTML (index.html)** → Defines structure
* **CSS (styles.css)** → Handles design and layout
* **JavaScript (script.js)** → Controls functionality and logic

This approach makes the code:

* Easier to maintain
* More readable
* Reusable across projects

---

## 🚀 How to Run

1. Download or clone the project
2. Keep all files in the same folder
3. Open `index.html` in your browser

---

## 📷 Expected Output

* A button labeled **"Process Data"**
* A status area showing interaction results
* Button disables after 3 clicks

---

