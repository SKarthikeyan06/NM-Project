#Client-Side Form Validation using Node.js
This project demonstrates **client-side form validation** integrated with a **Node.js backend**. It ensures that user input is validated **both on the browser side** (for better user experience) and **on the server side** (for security and data integrity).
---
##Features
- HTML form with input fields (Name, Email, Password, etc.)
- Real-time client-side validation using JavaScript  
- Error and success messages displayed dynamically  
- Backend validation with Node.js & Express  
- Form data submission via POST request  
- Secure input handling and response rendering  
---
##Project Structure

```
client-form-validation/
│
├──index.html             # Main form UI
├── server.js                  # Node.js Express server
└── README.md                  # Project documentation
```
---
##Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Validation | Client-side (JS), Server-side (Express) |
---
##Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/skarthikeyan06/client-form-validation.git
cd client-form-validation
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the server
```bash
node server.js
```
### 4. Open in browser
Visit → [http://localhost:3000](http://localhost:3000)
---
##Usage

1. Open the form in the browser.  
2. Fill in details like name, email, and password.  
3. Client-side validation checks input instantly:
   - Required fields
   - Valid email format
   - Password length (min. 6 characters)
4. On successful validation, the data is sent to the Node.js server.
5. Server revalidates and returns a success message.

---

##Learning Outcomes
- Understand how client-side validation improves UX.  
- Learn how to secure form submission with backend validation.  
- Integrate static frontend with an Express backend.  

---
##Author
**Karthikeyan S**  
karthikeyansureshbabu06@gmail.com
(https://github.com/skarthikeyan06)
---
##License
This project is licensed under the **MIT License** – you are free to use and modify it.