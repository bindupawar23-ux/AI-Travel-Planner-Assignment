const {
    GoogleGenerativeAI
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const generateTripPlan = async (
    destination,
    days,
    budgetType,
    interests
) => {
    try {
        const model =
            genAI.getGenerativeModel({
                model: "gemini-1.5-flash"
            });

        const prompt = `
Generate a travel itinerary.

Destination: ${destination}

Number of Days: ${days}

Budget Type: ${budgetType}

Interests:
${interests.join(", ")}

Return ONLY JSON.

{
  "itinerary":[
    {
      "day":1,
      "activities":[]
    }
  ],

  "budget":{
    "flights":0,
    "accommodation":0,
    "food":0,
    "activities":0,
    "total":0
  },

  "hotels":[
    {
      "name":"",
      "type":""
    }
  ]
}
`;

        const result =
            await model.generateContent(prompt);

        const response =
            result.response.text();

        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    generateTripPlan
};