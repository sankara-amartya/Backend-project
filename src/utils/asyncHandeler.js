const asyncHandler =  (requestHandeler) =>{
    (req,res,next)=>{
        Promise.resolve(requestHandeler(req,res,next)).catch((error)=>{
            console.error(error);
        });
    }
}

export {
    asyncHandler
}