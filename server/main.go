package main

import (
	pb "../pb"
	"google.golang.org/grpc"
	"log"
	"net"
)

// $ go run server/main.go server/search_service.go
func main()  {
	// =====increment.pb.goのやつ======== ​
	//listen, err := net.Listen("tcp", "localhost:5555")
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//
	//server := grpc.NewServer()
	//service := &incrementService{}
	//
	//pb.RegisterIncrementServiceServer(server, service)
	//server.Serve(listen)

	// =====search.pb.goのやつ========
	listen, err := net.Listen("tcp", "localhost:5555")
	if err != nil {
		log.Fatalln(err)
	}

	server := grpc.NewServer()
	service := &searchService{}

	pb.RegisterSearchServiceServer(server, service)
	_ = server.Serve(listen)
}