package main

import (
	pb "../pb"
	"context"
	"fmt"
)

type searchService struct{}

func (s *searchService) Search(ctx context.Context, req *pb.SearchRequest) (*pb.SearchResponse, error)  {
	// リクエストのクエリ確認
	fmt.Println("STDOUT : this is SearchRequest = ", req.Query, " and Content = ", ctx)

	str := []string{"responseはコチラ ", "株式会社bizりーーーち！"}

	return &pb.SearchResponse{A:str}, nil
}
