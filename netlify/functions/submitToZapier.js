// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Example mapping from the provided JSON
const optionMappings = {
    // Length options
    "v_4029679": "48'",
    "v_4029680": "72'",
    "v_4029681": "96'",
    "v_4029682": "120'",
    "v_643257_ldd2dzk7": "144'",
    "v_643257_ldd2e6xf": "168'",
    "v_643257_ldd2etqj": "192'",
    "v_4043553": "24'",
    "v_4043554": "36'",
    "v_4043555": "48'",
    "v_4043556": "72'",
    "v_4043557": "96'",
    "v_6472337": "16'",
    "v_6472338": "24'",
    "v_6472339": "32'",
    "v_1025051_iwsgajoxvjksclbosp": "40'",
    "v_1025051_1ux1kjnzsjwspd7zhq": "48'",

    // Roll-up Side Operation
    "v_4030587": "Manual 5:1 Hand Cranks",
    "v_4030588": "Motorized and Thermostatically Controlled",
    "v_4043570": "Manual 5:1 Hand Cranks",
    "v_4043571": "Motorized and Thermostatically Controlled",

    // Overhead Plastic options are numerous and cover various lengths and types,
    // here are a few examples
 // Overhead Plastic options for various lengths
    "v_4043601": "No overhead plastic (24'-long)",
    "v_4043602": "Single-layer 6-mil, 4-year Poly (24'-long)",
    "v_4043603": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (24'-long)",
    "v_4043604": "No overhead plastic (36'-long)",
    "v_4043605": "Single-layer 6-mil, 4-year Poly (36'-long)",
    "v_4043606": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (36'-long)",
    "v_4043607": "No overhead plastic (48'-long)",
    "v_4043608": "Single-layer 6-mil, 4-year Poly (48'-long)",
    "v_4043609": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (48'-long)",
    "v_4043610": "No overhead plastic (72'-long)",
    "v_4043611": "Single-layer 6-mil, 4-year Poly (72'-long)",
    "v_4043612": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (72'-long)",
    "v_4043613": "No overhead plastic (96'-long)",
    "v_4043614": "Single-layer 6-mil, 4-year Poly (96'-long)",
    "v_4043615": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (96'-long)",

// Overhead Plastic options for 48' lengths across products
    "v_4029697": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (48')",
    "v_4029698": "Single-layer 6-mil, 4-year poly (48')",
    "v_643265_lddjtssb": "No overhead plastic (48')",

    // Overhead Plastic options for 72' lengths across products
    "v_4030578": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (72')",
    "v_4030579": "Single-layer 6-mil, 4-year poly (72')",
    "v_643504_lddjz8f7": "No Overhead Plastic (72')",

    // Overhead Plastic options for 96' lengths across products
    "v_4030580": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (96')",
    "v_4030581": "Single-layer 6-mil, 4-year poly (96')",
    "v_643505_lddjzynm": "No Overhead Plastic (96')",

    // Overhead Plastic options for 120' lengths across products
    "v_4030582": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (120')",
    "v_4030583": "Single-layer 6-mil, 4-year poly (120')",
    "v_643506_lddk0sr9": "No Overhead Plastic (120')",

    // Overhead Plastic options for 144' lengths across products
    "v_4071322": "No overhead plastic (144')",
    "v_4071323": "Single-layer 6-mil, 4-year poly (144')",
    "v_4071324": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (144')",

    // Overhead Plastic options for 168' lengths across products
    "v_4071325": "No overhead plastic (168')",
    "v_4071326": "Single-layer 6-mil, 4-year poly (168')",
    "v_4071327": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (168')",

    // Overhead Plastic options for 192' lengths across products
    "v_4071328": "No overhead plastic (192')",
    "v_4071329": "Single-layer 6-mil, 4-year poly (192')",
    "v_4071330": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (192')",

    // Ensure to add all other necessary mappings for completeness

    // Delivery & Installation
    "v_643521_lddl6lik": "Pickup from Nifty Hoops (48103) - no charge",
    "v_4030629": "Delivery - quoted separately",
    // Continue for each value...

    // Mileage from the Nifty shop
    "v_4060191": "0-100 miles",
    "v_647489_ldnakpep": "101-200 miles",
    // Continue for each value...

    // Delivery & Installation options
    "v_643521_lddl6lik": "Pickup from Nifty Hoops (48103) - no charge",
    "v_4030629": "Delivery - quoted separately",
    "v_4030630": "Starter Build - quoted separately",
    "v_4030631": "Community Build - quoted separately",
    "v_4030632": "Full Installation - quoted separately",

    "v_4043680": "Pickup from Nifty Hoops (48103) - no charge",
    "v_4043681": "Delivery - quoted separately",
    "v_4043682": "Starter Build - quoted separately",
    "v_4043683": "Community Build - quoted separately",
    "v_4043684": "Full Installation - quoted separately",

    // Endwall Ventilation Options
    "v_4030599": "No Louver Vents",
    "v_4030598": "Automatic 4'W x 3'H Vents (12V actuators with thermostatic control)",
    "v_4043678": "No Louver Vents",
    "v_4043679": "Automatic 4'W x 2'H Vents (12V actuators with thermostatic control)",

    // Electrical Conduit (for low-voltage vent wiring) options
    "v_4302593": "No conduit",
    "v_4302594": "PVC conduit and boxes",

    // Kit Options for Package Tier 16 (o_1025053)
    "v_6472341": "Double-layer plastic with low voltage inflation",
    "v_6472342": "Louvers",
    "v_6472343": "Louver automation (motors, conduit, and thermostat control)",
    "v_1025053_tnmlb1zsyzmbulh4h2": "Side curtain automation (motors and thermostatic control)",

    // Kit Options for Package Tier 24 (o_1226885)
    "v_8593799": "Double-layer plastic with low voltage inflation",
    "v_8593800": "Louvers",
    "v_8593801": "Louver automation (motors, conduit, and thermostat control)",
    "v_8593802": "Side curtain automation (motors and thermostatic control)",

    // Kit Options for Package Tier 32 (o_1226886)
    "v_8593803": "Double-layer plastic with low voltage inflation",
    "v_8593804": "Louvers",
    "v_8593805": "Louver automation (motors, conduit, and thermostat control)",
    "v_8593806": "Side curtain automation (motors and thermostatic control)",

    // Kit Options for Package Tier 40 (o_1226887)
    "v_8593807": "Double-layer plastic with low voltage inflation",
    "v_8593808": "Louvers",
    "v_8593809": "Louver automation (motors, conduit, and thermostat control)",
    "v_8593810": "Side curtain automation (motors and thermostatic control)",

    // Kit Options for Package Tier 48 (o_1226888)
    "v_8593811": "Double-layer plastic with low voltage inflation",
    "v_8593812": "Louvers",
    "v_8593813": "Louver automation (motors, conduit, and thermostat control)",
    "v_8593814": "Side curtain automation (motors and thermostatic control)",


    // This pattern should be continued for all values across all options provided in the JSON data
};

// Simplified for demonstration
const valueMappings = {
    // 30' Gothic Options Lengths

    "v_4029679": "30x48 Gothic Hoophouse",
    "v_4029680": "30x72 Gothic Hoophouse",
    "v_4029681": "30x96 Gothic Hoophouse",
    "v_4029682": "30x120 Gothic Hoophouse",
    "v_643257_ldd2dzk7": "30x144 Gothic Hoophouse",
    "v_643257_ldd2e6xf": "30x168 Gothic Hoophouse",
    "v_643257_ldd2etqj": "30x192 Gothic Hoophouse",

    // 22.5' Gothic Options Lengths
    "v_4043553": "22.5x24 Gothic Hoophouse",
    "v_4043554": "22.5x36 Gothic Hoophouse",
    "v_4043555": "22.5x48 Gothic Hoophouse",
    "v_4043556": "22.5x72 Gothic Hoophouse",
    "v_4043557": "22.5x96 Gothic Hoophouse",

    // 16' Options Lengths
    "v_6472337": "16x16 Gothic Hoophouse",
    "v_6472338": "16x24 Gothic Hoophouse",
    "v_6472339": "16x32 Gothic Hoophouse",
    "v_1025051_iwsgajoxvjksclbosp": "16x40 Gothic Hoophouse",
    "v_1025051_1ux1kjnzsjwspd7zhq": "16x48 Gothic Hoophouse",

    // Roll-up Side Operation Options
    "v_4030587": "Manual 5:1 Hand Cranks",
    "v_4030588": "Motorized and Thermostatically Controlled",
    "v_4043570": "Manual 5:1 Hand Cranks",
    "v_4043571": "Motorized and Thermostatically Controlled",

    // Overhead Plastic Options
"v_4029697": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (48')",
"v_4029698": "Single-layer 6-mil, 4-year poly (48')",
"v_643265_lddjtssb": "No overhead plastic (48')",
"v_4030578": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (72')",
"v_4030579": "Single-layer 6-mil, 4-year poly (72')",
"v_643504_lddjz8f7": "No Overhead Plastic (72')",
"v_4030580": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (96')",
"v_4030581": "Single-layer 6-mil, 4-year poly (96')",
"v_643505_lddjzynm": "No Overhead Plastic (96')",
"v_4030582": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (120')",
"v_4030583": "Single-layer 6-mil, 4-year poly (120')",
"v_643506_lddk0sr9": "No Overhead Plastic (120')",
"v_4071322": "No overhead plastic (144')",
"v_4071323": "Single-layer 6-mil, 4-year poly (144')",
"v_4071324": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (144')",
"v_4071325": "No overhead plastic (168')",
"v_4071326": "Single-layer 6-mil, 4-year poly (168')",
"v_4071327": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (168')",
"v_4071328": "No overhead plastic (192')",
"v_4071329": "Single-layer 6-mil, 4-year poly (192')",
"v_4071330": "Double-layer (Clear & IRAC) 6-mil, 4 year & 12V inflation (192')",
"v_4043601": "No overhead plastic (24'-long)",
"v_4043602": "Single-layer 6-mil, 4-year Poly (24'-long)",
"v_4043603": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (24'-long)",
"v_4043604": "No overhead plastic (36'-long)",
"v_4043605": "Single-layer 6-mil, 4-year Poly (36'-long)",
"v_4043606": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (36'-long)",
"v_4043607": "No overhead plastic (48'-long)",
"v_4043608": "Single-layer 6-mil, 4-year Poly (48'-long)",
"v_4043609": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (48'-long)",
"v_4043610": "No overhead plastic (72'-long)",
"v_4043611": "Single-layer 6-mil, 4-year Poly (72'-long)",
"v_4043612": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (72'-long)",
"v_4043613": "No overhead plastic (96'-long)",
"v_4043614": "Single-layer 6-mil, 4-year Poly (96'-long)",
"v_4043615": "Double-layer (Clear over IRAC) 6-mil, 4 year & 12V inflation (96'-long)",

     // Delivery & Installation Options


"v_643521_lddl6lik": "Pickup from Nifty Hoops (48103) - no charge",
"v_4030629": "Delivery - quoted separately",
"v_4030630": "Starter Build - quoted separately",
"v_4030631": "Community Build - quoted separately",
"v_4030632": "Full Installation - quoted separately",
"v_4043680": "Pickup from Nifty Hoops (48103) - no charge",
"v_4043681": "Delivery - quoted separately",
"v_4043682": "Starter Build - quoted separately",
"v_4043683": "Community Build - quoted separately",
"v_4043684": "Full Installation - quoted separately",

     // Kit Options for 16

"v_6472341": "Double-layer plastic with low voltage inflation",
"v_6472342": "Louvers",
"v_6472343": "Louver automation (motors, conduit, and thermostat control)",
"v_1025053_tnmlb1zsyzmbulh4h2": "Side curtain automation (motors and thermostatic control)",
"v_8593799": "Double-layer plastic with low voltage inflation",
"v_8593800": "Louvers",
"v_8593801": "Louver automation (motors, conduit, and thermostat control)",
"v_8593802": "Side curtain automation (motors and thermostatic control)",
"v_8593803": "Double-layer plastic with low voltage inflation",
"v_8593804": "Louvers",
"v_8593805": "Louver automation (motors, conduit, and thermostat control)",
"v_8593806": "Side curtain automation (motors and thermostatic control)",
"v_8593807": "Double-layer plastic with low voltage inflation",
"v_8593808": "Louvers",
"v_8593809": "Louver automation (motors, conduit, and thermostat control)",
"v_8593810": "Side curtain automation (motors and thermostatic control)",
"v_8593811": "Double-layer plastic with low voltage inflation",
"v_8593812": "Louvers",
"v_8593813": "Louver automation (motors, conduit, and thermostat control)",
"v_8593814": "Side curtain automation (motors and thermostatic control)",


     // Endwall ventilation options

"v_4030599": "No Louver Vents",
"v_4030598": "Automatic 4'W x 3'H Vents (12V actuators with thermostatic control)",
"v_4043678": "No Louver Vents",
"v_4043679": "Automatic 4'W x 2'H Vents (12V actuators with thermostatic control)",

     // Conduit options

"v_4302593": "No conduit",
"v_4302594": "PVC conduit and boxes",

};

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
    // Handle CORS preflight requests
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({message: "CORS preflight accepted"})
        };
    }

    // Process POST requests
    if (event.httpMethod === "POST") {
        try {
            // Parse the incoming request body
            const body = JSON.parse(event.body);

            // Map the incoming request as needed
            const configValuesOnly = Object.values(body.productConfig).map(value => {
                // Assuming 'valueMappings' contains mappings for 'productConfig' values
                // Replace 'valueMappings[value]' with your actual logic if different
                return valueMappings[value] || `Unknown Config: ${value}`;
            });

            // Prepare the string for the webhook
            const configString = configValuesOnly.join('\n');

            // Prepare the payload for the webhook
            const payloadForWebhook = {
                configString: configString,
                // Include the entire body or any other information as needed
                originalBody: body
            };

            // Send the processed data to your webhook
            const response = await fetch('https://hooks.zapier.com/hooks/catch/6939704/3qzeaip/', {
                method: 'POST',
                body: JSON.stringify(payloadForWebhook),
                headers: { 'Content-Type': 'application/json' },
            });

            // Check the response from the webhook
            if (!response.ok) {
                throw new Error(`Webhook error with status: ${response.status}`);
            }

            // Return a success response
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: "Data sent to webhook successfully" })
            };
        } catch (error) {
            // Handle any errors
            return {
                statusCode: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: `Server error: ${error.message}` })
            };
        }
    } else {
        // Handle unsupported HTTP methods
        return {
            statusCode: 405,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({message: "Method not allowed"})
        };
    }
};
