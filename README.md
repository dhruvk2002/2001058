My 2001058 Repository

# Number Management Service

The Number Management Service is a lightweight HTTP microservice designed to retrieve data from multiple URLs, process the data, and return a sorted list of unique integers in ascending order. It was created as a coding assessment to showcase a simple yet efficient implementation that adheres to the specified requirements.

## Features

- Process multiple URLs provided via query parameters.
- Retrieve JSON data from each valid URL.
- Merge unique integers from the fetched data.
- Return merged integers in ascending order.
- Respect a timeout for each URL request, ensuring responsiveness.

## Getting Started

### Prerequisites

Before you start, make sure you have the following:

- [Node.js](https://nodejs.org/) (v18.17.1 or compatible)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

Navigate to the project directory:

bash
Copy code
cd number-management-service
Install dependencies:

bash
Copy code
npm install
Usage
Start the microservice:

bash
Copy code
node index.js
Access the microservice API using tools like curl, Postman, or a web browser:

http
Copy code
GET http://localhost:3000/numbers?url=http://20.244.56.144/numbers/primes&url=http://abc.com/fibo
Replace the URLs with valid URLs that return JSON data in the specified format.

Troubleshooting
If you encounter errors while fetching data from URLs, ensure the URLs are accessible and provide the expected JSON data.
Check network connectivity and ensure there are no restrictions preventing outgoing HTTP requests.
Notes
This project is a coding assessment and is not intended for production use.
The provided timeout (500 ms) is strictly adhered to for each URL request, which may lead to skipping URLs that take longer to respond.
Your feedback is valuable! If you have any suggestions or encounter issues, please don't hesitate to let us know.

Created by Dhruv kumar Shukla.

# Screenshots
![Image1](https://i.ibb.co/yQ6NKgQ/1.png)
![Image2](https://i.ibb.co/VTNmpM5/2.png)
![Image3](https://i.ibb.co/vLdtrgB/3.png)

