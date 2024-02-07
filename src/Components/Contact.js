
const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
            <form className="w-60 flex flex-wrap justify-center align-middle px-auto mx-auto">
                <input type="text" placeholder="Name" className=" border border-black p-1 m-1 rounded-md"/>
                <input type="text" placeholder="Message" className="border border-black p-1 m-1 rounded-md"/>
               <button className="border border-black p-1 m-1 rounded-lg">Submit</button>
            </form>
        </div>
    )
};
export default Contact;