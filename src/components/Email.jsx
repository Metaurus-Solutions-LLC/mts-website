function Email() {
    return (
      <div class="y-wrap">
        <div class="page">
          <div class="email-container">
            <form method="post" action="https://formspree.io/f/xqkwgvja">
              <div>
                <h3 class="mt-4 text-xl md:text-3xl">You can send us an email with the web form below. We look forward to hearing from you.</h3>
                <div class="min-w-64 w-1/4 h-16 text-2xl mt-16 mb-4 text-black"><input type="text" value="To: Metaurus Solutions, LLC" readonly="readonly" name="site" placeholder="To: Metaurus Solutions, LLC" className="w-full rounded-md"/></div>
                <div class="min-w-64 w-1/4 h-16 text-2xl mt-1 mb-4"><input type="text" name="name" placeholder="Name" class="w-full border-2 border-zinc-600 rounded-md"/></div>
                <div class="min-w-72 w-1/2 h-16 text-2xl mt-1 mb-4"><input type="text" name="email" placeholder="Email" class="w-full border-2 border-zinc-600 rounded-md"/></div>
                <div class="min-w-96 w-4/5 h-32 text-2xl mt-1 mb-4">
                  <textarea name="message" placeholder="Message" class="w-full h-32 text-2xl mt-1 mb-4 border-2 border-zinc-600 rounded-md"></textarea>
                </div>
                <div class="bg-[#182335] hover:bg-blue-700 text-white font-bold w-48 py-2 px-4 rounded">
                  <input type="submit" value="Send Email Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
export default Email;