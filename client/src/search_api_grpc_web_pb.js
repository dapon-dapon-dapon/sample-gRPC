/**
 * @fileoverview gRPC-Web generated client stub for search
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.search = require('./search_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.search.SearchServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.search.SearchServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.search.SearchRequest,
 *   !proto.search.SearchResponse>}
 */
const methodDescriptor_SearchService_Search = new grpc.web.MethodDescriptor(
  '/search.SearchService/Search',
  grpc.web.MethodType.UNARY,
  proto.search.SearchRequest,
  proto.search.SearchResponse,
  /** @param {!proto.search.SearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.SearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.search.SearchRequest,
 *   !proto.search.SearchResponse>}
 */
const methodInfo_SearchService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.search.SearchResponse,
  /** @param {!proto.search.SearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.search.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.search.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.search.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.search.SearchServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/search.SearchService/Search',
      request,
      metadata || {},
      methodDescriptor_SearchService_Search,
      callback);
};


/**
 * @param {!proto.search.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.search.SearchResponse>}
 *     A native promise that resolves to the response
 */
proto.search.SearchServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/search.SearchService/Search',
      request,
      metadata || {},
      methodDescriptor_SearchService_Search);
};


module.exports = proto.search;

