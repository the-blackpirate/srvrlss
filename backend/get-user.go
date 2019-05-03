package backend

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"go.opencensus.io/trace"
)

// GetUser api uses Firebase Authentication and returns the user data
func GetUser(w http.ResponseWriter, r *http.Request) {
	ctx, span := trace.StartSpan(r.Context(), "srvrlss.com/rajveermalviya/srvrlss/GetUser")
	defer span.End()

	header := w.Header()
	header.Set("content-type", "application/json; charset=utf-8")
	header.Set("cache-control", "public, max-age=172800")

	if r.Method != "GET" {
		json.NewEncoder(w).Encode(map[string]string{
			"error": "invalid-http-method",
		})
		return
	}

	uid := r.URL.Query().Get("uid")

	if uid == "" {
		w.Write([]byte("{}"))
		return
	}

	u, err := firebaseAuth.GetUser(ctx, uid)
	if err != nil {
		log.Printf("Error: cannot get user-data : %v\n", err)

		m := err.Error()

		if strings.Contains(m, "cannot find user from uid") {
			json.NewEncoder(w).Encode(map[string]string{
				"error": "no-user",
			})
			return
		}

		json.NewEncoder(w).Encode(map[string]string{
			"error": "internal",
		})
		return
	}

	json.NewEncoder(w).Encode(map[string]string{
		"name": u.DisplayName,
		"img":  u.PhotoURL,
	})
}
