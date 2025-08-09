// // src/app/components/Header.tsx
// import Navbar from './Navbar'

// export default function Header() {
//   return (
//     <header className="shadow-md bg-white sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-pink-600">Lehra Goods</h1>
//         <Navbar />
//       </div>
//     </header>
//   )
// }
export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Lehra Goods</h1>
        <p className="text-sm">Claire Frigouret et Danny Jones</p>
      </div>
    </header>
  )
}