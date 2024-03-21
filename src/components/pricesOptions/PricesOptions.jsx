import PriceOption from "../priceOption/PriceOption";

const PricesOptions = () => {

    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to strength training machines",
              "Locker room access",
              "Free WiFi",
              "Discounts on gym merchandise",
              "Access to fitness classes (limited)",
              "Monthly fitness assessment"
            ],
            "price": "$29.99"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to all basic features",
              "Group fitness classes included",
              "Sauna and steam room access",
              "Access to outdoor pool",
              "Nutritional guidance session",
              "Unlimited access to fitness classes",
              "Monthly personalized workout plan"
            ],
            "price": "$49.99"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to all standard features",
              "Personal training session per month",
              "Towel service included",
              "Access to indoor basketball court",
              "Massage therapy session per month",
              "Access to all premium fitness classes",
              "Quarterly body composition analysis"
            ],
            "price": "$79.99"
          }
        ]
      
      


    return (
        <div className="m-12">
            <h2 className="text-5xl text-center mb-6">Best Price in the Twon</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PricesOptions;