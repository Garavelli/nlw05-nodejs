import { http } from './http';
import './websocket/client';

http.listen(3333, () => console.log("server is up and running on port 3333"));
