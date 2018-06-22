// Sync
request = prepare_the_request( );
response = send_request_sync(request);
display(response);

// Async 
request = prepare_the_request( );
send_request_async (request, function (response) {
    display(response);
});

