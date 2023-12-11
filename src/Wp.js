import React, { useEffect } from "react";

const MyPaymentComponent = () => {
    useEffect(() => {
        const loadWorldpayScript = () => {
            const script = document.createElement("script");
            script.src =
                "https://payments.worldpay.com/resources/hpp/integrations/embedded/js/hpp-embedded-integration-library.js";
            script.async = true;

            script.onload = () => {
                console.log("Script loaded successfully");

                // Your custom options for injecting the iframe
                const customOptions = {
                    url: "https://payments-test.worldpay.com/app/hpp/integration/wpg/corporate?OrderKey=M1LTDESHOPSGREC%5EA-9df352e1701412724786&Ticket=0017018447254870252JJT4RkFMjJ7P5L4g62uAyIpY6d-gGtJK8Bn5&source=https%3A%2F%2Fsecure-test.worldpay.com",
                    type: "iframe",
                    inject: "onload",
                    target: "custom-html",
                    accessibility: true,
                    debug: false,
                };

                console.log("Setting up library with options:", customOptions);

                // Initialize the library and pass options
                const libraryObject = new window.WPCL.Library();
                libraryObject.setup(customOptions);
            };

            script.onerror = () => {
                console.error("Error loading script");
            };

            document.body.appendChild(script);
        };

        // Load the Worldpay script
        loadWorldpayScript();

        return () => {
            // Cleanup on component unmount
            // You may need to remove the script if necessary
        };
    }, []);

    // Return the component's JSX
    return (
        <div>
            <div>This is my test page as a merchant</div>
            <div id="custom-html"></div>
        </div>
    );
};

export default MyPaymentComponent;
