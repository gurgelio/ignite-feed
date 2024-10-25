import { PencilSimple } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-20 object-cover"
        src="https://images.unsplash.com/photo-1719329411191-be2cda36a37c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="flex flex-col items-center">
        <Avatar
          className="-mt-8 border-gray-800"
          src="https://github.com/torvalds.png"
          outline={true}
        />
        <strong className="mt-4 text-gray-100 leading-relaxed">
          Linus Torvalds
        </strong>
        <span className="text-sm/relaxed text-gray-400">Creator of Linux</span>
      </div>

      <footer className="border-t-gray-600 border-t mt-6 pt-6 p-8">
        <a
          className="bg-transparent text-emerald-500 border border-emerald-500 rounded-lg h-12 font-bold px-4 flex items-center justify-center gap-2 whitespace-nowrap hover:bg-emerald-500 hover:text-white transition-colors"
          href="#aside"
        >
          <PencilSimple size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
