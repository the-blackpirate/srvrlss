package main

import (
	"net/http"

	"github.com/rajveermalviya/srvrlss/backend"
)

func main() {
	http.HandleFunc("/", backend.GetUser)
	http.ListenAndServe(":8080", nil)
}
