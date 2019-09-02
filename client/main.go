package main

import (
	pb "../pb"
	"context"
	"fmt"
	"google.golang.org/grpc"
	"log"
	"time"
)

// 実行:go run client/main.go
func main()  {
	connection, err := grpc.Dial("localhost:5555", grpc.WithInsecure())
	if err != nil {
		log.Fatalln(err)
	}
	defer connection.Close()

	client := pb.NewSearchServiceClient(connection)

	cnt, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.Search(cnt, &pb.SearchRequest{Query:"株式会社ビズリーチ"})
	if err != nil {
		log.Println(err)
	}

	fmt.Println(response.A)
}