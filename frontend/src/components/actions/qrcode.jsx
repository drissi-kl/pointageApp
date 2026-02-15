import { Sheet, ScanQrCode } from 'lucide-react'
import React, { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react';

export default function Qrcode({user}) {
    const canvasRef = useRef();
    const downloadQrcode = () => {
        const canvas = canvasRef.current.querySelector('canvas');
        if(canvas){
            const imageUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            const downloadLink = document.createElement('a');
            downloadLink.href = imageUrl;
            downloadLink.download = `employee:${user.name}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink)
        }
        

    }


    return  <main>
        <header className="mb-10">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <ScanQrCode className="text-zinc-100" size={24} />
                </div>
                <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">Qr Code</h1>
            </div>
            <p className="text-zinc-500 text-sm ">
                Review and monitor daily attendance and work hours.
            </p>
        </header>

        <div className=' mb-3 flex justify-center items-center'>
            <div className='bg-zinc-800 p-3 rounded-md' ref={canvasRef} >
                <QRCodeCanvas
                    value={user.employee.code}
                    size={256}
                    level="H"
                    includeMargin={true}
                />
            </div>
        </div>

        <div className='flex justify-center'>
            <button 
                className='bg-white text-zinc-900 rounded-md px-4 py-2 font-bold hover:scale-[0.98] hover:cursor-pointer transition-all duration-300'
                onClick={()=>downloadQrcode()}
            >
                Download
            </button>

        </div>

  </main>
}
