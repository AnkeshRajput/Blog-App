import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { LinkedinIcon, Github, Twitter } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="border-t bg-background text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-emerald-500 to-orange-400 bg-clip-text text-transparent transition-all duration-300 ease-in-out">
                HearinghHope Blogs
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Community stories and resources to support better hearing and
              speech health.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Github, LinkedinIcon].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className="transition hover:scale-110 hover:shadow-[0_0_12px_rgba(129,140,248,0.4)]"
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-emerald-400" />
                </Button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {["All Articles", "Topics", "Authors", "Podcasts"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Licenses",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Stay Updated
            </h3>
            <form className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 py-5 rounded-lg shadow-inner bg-white/5 border border-white/10 backdrop-blur-sm text-white focus:ring-2 focus:ring-emerald-500"
                />
                <Mail className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-orange-400 hover:brightness-110 hover:shadow-lg transition text-white font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">HearinghHope Blogs</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
