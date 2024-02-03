import React from 'react';


export const Login = () => {
    return (
        <>
        <div className='w-full h-screen flex jus items-start'>
            <div className='relative w-1/2 h-full flex-col'>
              <img src="https://cdn.discordapp.com/attachments/753054252020006953/1179962089838739456/Nike-Sp20-Turkey-_BB_.png?ex=657bb054&is=65693b54&hm=f9d1a3d41e02be60bdf14ea2077242be7af974fc033c2362a4c8d1239e6813a7&" className='w-full h-full object-cover'  alt="" />
            </div>

            {/* <div className='flex items-center justify-center '>
            <img src="https://cdn.discordapp.com/attachments/753054252020006953/1179955920466366558/LogoPNGG.png?ex=657baa95&is=65693595&hm=3e3c377ee2a83920d5951d3d4b7a76567f9e62c00eb76f3558bab25ed8fc5c97&" alt="" className='w-16/5 h-16/5'/>
            </div> */}
                <div className='w-1/2 h-full bg-white flex flex-col  p-20 justify-between items-center'>
                <h1 className='text-2x1 text-black font-semibold'>SportWear</h1>


                    <div className='w-full flex flex-col max-w-[490px]'>
                        <div className='w-full  flex flex-col mb-2'>                 
                        <h3 className='text-3xl font-semibold mb-2'>Iniciar Sesión</h3>
                        <p className='text-base mb-2'>Bienvenido</p>
                     </div>
                    
                    <div className='w-full flex flex-col'>
                        <input type="email"
                        placeholder='Email' 
                        className='w-full text-sm text-black border-b my-2 py-2 bg-transparent border-black outline-none focus:outline-none'                        
                        />
                        <input type="password"
                        placeholder='Contraseña' 
                        className='w-full text-sm text-black border-b my-2 py-2 bg-transparent border-black outline-none focus:outline-none'                        
                        />
                    </div>

                    <div className='w-full flex items-center justify-between '>
                        <div className='w-full flex items-center'>
                            <input type="checkbox"  className='w-4 h-4 mr-2'/>
                        <p className='text-sm'>Recordarme</p>
                    </div>

                        <p className='text-sm font-medium whitespace-nowrap underline underline-offset-2  hover:text-red-600 cursor-pointer'>Olvidaste Tu Contraseña?</p>
                     </div>
                     <div className='w-full flex flex-col'>
                        <button className='w-full bg-blue-700 my-8 rounded-lg  justify-center text-white  p-3 text-center flex item-start'>Iniciar Sesión</button>
                     </div>
                        <div className='w-full flex py-1 my-1 items-center justify-center'>
                            <div className='w-full h-[1px] bg-black'></div>
                             <p className='absolute text-md text-black/80 bg-white'>O Continuar Con</p>
                        </div>

                        <button>
                        <div className='w-full bg-blue-700 my-4 rounded-lg border-1  justify-center text-white  p-4 text-center flex item-start'>
                            <img className='h-6 mr-2' src="https://cdn.discordapp.com/attachments/753054252020006953/1180991722277306430/google.png?ex=657f6f40&is=656cfa40&hm=dbc6c91221e18dce52532fc43a47d68b1f63aead83f5a807113c7ad3b5f9085f&" alt="" />
                            Iniciar Sesión Con Google
                        </div>
                        </button>
                        
                        <button>
                        <div className='w-full bg-blue-700 my-4 rounded-lg border-1  justify-center text-white  p-4 text-center flex item-start'>
                            <img  className='h-7 mr-2'src="https://cdn.discordapp.com/attachments/753054252020006953/1180991641033658418/siu.png?ex=657f6f2c&is=656cfa2c&hm=82ac1a9c207f9abf2cba5cd32fa882384ba7e6c5c6cf338d81c934fc68ed2a37&" alt="" />
                            Iniciar Sesión Con Facebook
                        </div>
                        </button>
                </div>
                <div className='w-full items-center justify-center'>
                    <p className='text-sm font-normal text-center text-black'>No tienes Una Cuenta?<span className='font-semibold text-blue-500 underline underline-offset-2 cursor-pointer '><a href="">Crear Cuenta Nueva</a></span></p>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login;