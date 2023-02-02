export default function handler(req, res) {  
  res.status(200).json({ 
    path: "api/posts",
    message: "get all posts"
  })
}


