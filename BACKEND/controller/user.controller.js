import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generateToken.js"
 export const signup= async (req,res)=>{
 
  try{
    const {fullname,email,password,confirmPassword}=req.body;

    if(password!==confirmPassword){
        return res.status(400).json({error:"Passwords don't match"});
    }

    //mail exists
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({error:"Email already exists"});

    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser= new User({
        fullname,
        email,
        password : hashedPassword
          });
      await newUser.save();
     if(newUser){
      createTokenAndSaveCookie(newUser._id,res);
      return res.status(201).json({message:"User created successfully",newUser});

     }
     res.status(201).json({message:"New User created"});
    
  }
  catch(error){
    res.status(500).json({error:"Internal server error"})
  }
    
}
//login
export const login=async(req,res)=>{
  const {email,password}=req.body;

  try{
    const user=await User.findOne({email})
    const isMatch=await bcrypt.compare(password,user.password)
    
    if(!user || !isMatch){
      return res.status(400).json({error:"Invalid credentials"})
      }

      createTokenAndSaveCookie(user._id,res);
      res.status(200).json({message:"User log-in successfull",user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
      }});


  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"Internal server error"})

  }
}

//LOGOUT!
export const logout=async(req,res)=>{
  try{
    res.clearCookie("jwt")
    res.status(200).json({message:"User logged out successfully"})
  }

  catch(error){
    console.log(error)
    res.status(500).json({error:"Internal server error"})

  }
}

//All users
export const allUsers= async(req, res)=>{
  try{
    const loggedInUser=req.user._id;
    const filteredUsers = await User.find({_id: {$ne: loggedInUser}}).select("-password");
    res.status(201).json(
      filteredUsers);
  }
  catch(error){
    console.log("Error in allUsers controller:" + error);

  }
}
