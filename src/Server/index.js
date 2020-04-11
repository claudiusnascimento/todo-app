import { Server } from "miragejs"

export default function make() {
    new Server({
        routes() {
            this.namespace = "/api"
      
            this.get("/menu", () => [
                { id: "1", name: "Home", link: "/" },
                { id: "2", name: "Contato", link: "/contact" },
            ])
        },
    })
}

