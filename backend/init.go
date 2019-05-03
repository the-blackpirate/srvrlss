package backend

import (
	"context"
	"log"
	"os"

	"contrib.go.opencensus.io/exporter/stackdriver"
	"go.opencensus.io/trace"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
	"google.golang.org/api/option"
)

var (
	firebaseAuth *auth.Client
)

func init() {
	ctx := context.Background()

	opt := option.WithCredentialsFile(os.Getenv("GOOGLE_APPLICATION_CREDENTIALS"))

	// Instantiate the Firebase admin SDK
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Fatalf("error initializing App: %v\n", err)
	}

	firebaseAuth, err = app.Auth(ctx)
	if err != nil {
		log.Fatalf("error initializing Firebase Auth: %v\n", err)
	}

	exporter, err := stackdriver.NewExporter(stackdriver.Options{
		ProjectID: "srvrlss",
	})
	if err != nil {
		log.Fatalln(err)
	}

	trace.RegisterExporter(exporter)
}
