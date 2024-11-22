const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.get('/', function(req, res) {
    const data = [{
      id: 1,
      name: 'title',
      description: 'Insights Quirks'
    }];
  
    res.json({ data });
  });
  
  app.get('/about/whoweare', function(req, res) {
    const data = [
      {
        id: 1,
        title: 'Who we are?',
        description: "Insight Quirks Club is a vibrant community focused on sparking creativity and collaboration. We're all about pushing the boundaries, embracing new ideas, and making a positive impact. Join us, and let's innovate together",
      }
    ];
  
    res.json({ data });
  });


  app.get('/about/whatwedo', function(req, res) {
    const data = [
      {
        id: 1,
        title: 'What we do?',
        description: "Inspire Creativity: We host Ideation workshops to spark innovative thinking. Learn and Grow: We provide learning opportunities to expand your knowledge and skills. Collaborate: We encourage teamwork and offer resources for project development. Connect: We organize networking events for valuable connections and experiences.",
      }
    ];
});

    app.get('/about/howwemeet', function(req, res) {
        const data = [
          {
            id: 1,
            title: 'How we meet?',
            description: "Insight Quirks Emerged from a diverse mix of Alumni, seasoned professionals, and enthusiasts across various domains who shared a passion for unique perspectives and knowledge sharing. Our club was born out of a desire to create a vibrant community where unconventional thinking, creativity, and curiosity thrive. Today, we're a growing family, united by our quirks and driven by the collective insight we bring to the table.",
          }
        ];
  
    res.json({ data });
  });


  app.get('/team', function(req, res) {
    const data = [
      {
        id: 1,
        name: 'Nishant Bhadke',
        imageUrl: 'http://localhost:5173/team/Nishant.jpg',
        description: 'Experienced .NET Core developer with 3+ years in C#, ASP.NET Core, and SQL Server. Proficient in backend systems, RESTful APIs, and AWS services. Detail-oriented, on-time delivery, open to collaboration.',
        socialLinks: [
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com'
            },
            {
              name: 'GitHub',
              url: 'https://github.com'
            }
          ]
      },
      {
        id: 2,
        name: 'Himanshu Bundela',
        imageUrl: 'http://localhost:5173/team/Himanshu.jpg',
        description: 'Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.',
        socialLinks: [
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com'
            },
            {
              name: 'GitHub',
              url: 'https://github.com'
            }
          ]
      }
    ];
  
    res.json({ data });
  });


app.listen(3000)
console.log("IQ Dev Server Running")