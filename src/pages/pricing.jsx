import React from 'react'

const Pricing = () => {

    const addEmployee2 = (e) => {
        e.preventDefault();
        console.log("it works!")
      };


  return (
    <div>
        
        <button onClick={addEmployee2} className="bg-blue-400">Add Employee</button>
        Pricing
About
Contact
Schedule a Demo

Pricing

Free Plan
Build and test using our core set of products with up to 100 API requests
$0.00

Transactions
Auth
Identity
Investments
Assets
Liabilities
Income
Request Access

Basic Plan
Launch your project with unlimited requests and no contractual minimums
$249.00

Transactions
Auth
Identity
Investments
Assets
Liabilities
Income
Request Access

Premium Plan
Get tailored solutions, volume pricing, and dedicated support for your team
$499.00

Transactions
Auth
Identity
Investments
Assets
Liabilities
Income
Request Access

Ready to start? 
Enter email address 
Schedule a Demo

Pricing
About
Contact
</div>


  )
}

export default Pricing

