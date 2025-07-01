const openRouterApi = async (message,styleOptions  = {})=>{
    console.log(process.env.REACT_APP_OPENROUTER_API_KEY,"msg")

    const framework = styleOptions.framework || "Tailwind CSS";
    const colorScheme = styleOptions.colorScheme || "blue";
    const size = styleOptions.size || "medium";
    const rounded = styleOptions.rounded || "medium";

    const systemPrompt = `You are an expert React developer. Generate clean, modern React components based on user descriptions.

    Guidelines:
    - Use functional components with hooks
    - Use ${framework === "tailwind" ? "Tailwind CSS classes" : framework} for styling
    - Apply ${colorScheme} color scheme
    - Use ${size} sizing
    - Apply ${rounded} border radius
    - Include accessibility attributes
    - Use semantic HTML, interactivity, responsiveness, and comments
    Return only the component code.`;

    try {
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
      
            {role: 'system', content: systemPrompt} ,
          {role: 'user', content: `Create a React component: ${message}` },
    
        ],
    }),
    
    });
    const data = await response.json();
    console.log(data)

    const code = data?.choices?.[0]?.message?.content;
    if (!code) {
      console.error("Unexpected response:", data);
      return { error: "Unexpected response from model" };
    }

    return { code };
  } catch (error) {
    console.error("API error:", error);
    return { error: "Failed to generate component" };
  }

     




}
export default openRouterApi




