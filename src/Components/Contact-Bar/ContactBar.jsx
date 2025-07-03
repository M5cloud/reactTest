// No need for external CSS unless you add something special
// import './ContactBar.css'; 

function ContactBar() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 bg-gray-100 text-gray-800 p-4 text-sm sm:text-base">
      
      <a
        href="https://wa.me/923291855911"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        📱 WhatsApp
      </a>

      <a
        href="mailto:mail.alhaseebtraders@gmail.com"
        className="hover:underline"
      >
        📧 Email
      </a>

      <a
        href="https://www.youtube.com/@ALHaseebTrader"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        ▶️ YouTube
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61577004824530"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        📘 Facebook
      </a>
    </div>
  );
}

export default ContactBar;
