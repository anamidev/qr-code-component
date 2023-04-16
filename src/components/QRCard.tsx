export default function QRCard() {
    return (
        <div className="m-6 max-w-[320px] p-4 rounded-2xl bg-custom-white shadow-xl shadow-[#c6d1de]">
            <img
                src="/image-qr-code.png"
                alt=""
                className="rounded-lg"
            />
            <h1 className="pt-6 text-[22px] leading-tight text-center font-bold text-custom-d-blue">Improve your front-end skills by building projects</h1>
            <p className="pt-4 pb-6 px-4 text-center leading-tight text-custom-g-blue">
                Scan the QR-code to visit Frontend Mentor and take your coding skills to the next
                level
            </p>
        </div>
    );
}
