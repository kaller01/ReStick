var express = require('express');
var router = express.Router();
const googleVerifier = require('google-id-token-verifier');
const keys = require("../config/secret-keys");

let idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjNmZhNmY1OTUwYTdjZTQ2NWZjZjI0N2FhMGIwOTQ4MjhhYzk1MmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjU2NjkzNTUzNTUyLTAxYmw2dWx2Mjlib2x1YjJsNXBnbmE1am92a2Q4NHBsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjU2NjkzNTUzNTUyLTAxYmw2dWx2Mjlib2x1YjJsNXBnbmE1am92a2Q4NHBsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NjMzMDk3NDU5MDAwOTIzMTU4IiwiZW1haWwiOiJtYXJ0aW42NzEzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiLUIxeF9PNm81VUJ4X2p6VjlzYzVrUSIsIm5hbWUiOiJNYXJ0aW4gS2FsbGVyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnc0RpcU1xNkh5aGVBMUM5enhRMGotZFFHeUhfYjZvb2JsaUhocWU5ST1zOTYtYyIsImdpdmVuX25hbWUiOiJNYXJ0aW4iLCJmYW1pbHlfbmFtZSI6IkthbGxlciIsImxvY2FsZSI6InN2IiwiaWF0IjoxNjAxMTI3MjIzLCJleHAiOjE2MDExMzA4MjMsImp0aSI6IjE0NjM3NGUzZTlkZTIxOTU2ZWE2NjgzMDA1YzU0N2RkMzEwZTM3MGYifQ.RQ_jOr7gfuhCzRiYdC--NVUsPR_uk3uz-9SZbj6H07HJJVxs3lZuPYyOETv2qQfr-nYZTtqoIrxPBQUhTo93tT6A-DeqCgZNjjrQySoGlcjoUGEihyHZ-5cS1Ol9uj3O38Y70uArMWGxSQn1iaVNIVqabUcfhfD4h7YnimQ8ZBeYKI7q24YB5vbNVYhGpoZNiT_jJUiCBzBaAcf0kCJHihMAqHK6OrdJN5ddZMKiEGYjjB5uFC_hSO0hwiLOEgHb9yZQA62Sd_7vy13Ys_YoEkqPpinVKVmMkfMj-Ut7CMq_uWEFz-QeWq9fvymJZNsbq_VigwXnkB1HbgA6fcfNjw";


//Auth with google
router.post('/google', (req, res) => { 
    googleVerifier.verify(req.body.idToken, keys.google.clientID, (err, tokenInfo) => {
        if(!err){
            console.log(tokenInfo)
            res.send(tokenInfo);
        }
    })
})



module.exports = router;