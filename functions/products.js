require("dotenv").config();

const Airtable = require("airtable-node");
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API,
})
  .base("appzrEOwuBAF4B6ab")
  .table("watch");
exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((p) => {
      const {
        id,
        fields: { name, image, desc, price },
      } = p;
      const url = image[0].url;
      return { id, name, desc, price, url };
    });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "server error",
    };
  }
};
