const openRouterApi = async (message,styleOptions)=>{
    console.log(process.env.REACT_APP_OPENROUTER_API_KEY,"msg")

    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
   
        method: 'POST',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        // 'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
        // 'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
        {
            role: 'user',
            content: 'What is the meaning of life?',
        },
        ],
    }),
    
    });
    const data = await response.json();
    console.log(data)
     




}
export default openRouterApi





// const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//       model: "mistralai/mistral-7b-instruct",
//       messages: [
//         { role: "system", content: systemPrompt },
//         { role: "user", content: `Create a React component: ${prompt}` },
//       ],
//       max_tokens: 2000,
//     })