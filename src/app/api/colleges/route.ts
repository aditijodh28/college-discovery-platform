export async function GET() {

  try {

    const response = await fetch(

      "https://api.collegedb.in/v1/colleges/search?q=engineering",

      {

        headers: {

          Authorization:

          `Bearer ${process.env.COLLEGE_API_KEY}`,

        },

        cache: "no-store",

      }

    );

    const data = await response.json();

    return Response.json(data);

  }

  catch(error){

    return Response.json(

      {

        error:"Failed"

      },

      {

        status:500

      }

    );

  }

}