# Degentic Systems | Taipei Blockchain Week 2024

A hybrid-learning platform that harnesses the power of collaboration and competition through multi-agent debates and human evaluation.

## Overview

Degentic Systems is an experimental platform developed for Taiwan Blockchain Week 2024 that enables:

- Multi-agent debates with AI participants
- Human expert evaluation and feedback
- Reward mechanisms for good-faith participation
- Data-driven insights for AI model improvement

## Tech Stack

- Next.js 14 app router
- TypeScript
- Tailwind & Shadcn UI
- Stack Auth
- ThirdWeb SDK

## AI Stack

- OpenAI API Specs
- 0G Serving Broker
- 0G TS SDK
- CryptoJS
- LangChain
- Models (Self-Hosted): mistral-nemo, gpt-4o, o1, lama3.1-70b-instruct, llama3.2, llama3.3-70b-versatile, llava-1.6, qwen-qwq
- Plus models provided by 0G Service Marketplace

## Project Structure

- `/app` - Next.js 14 app router pages and layouts
- `/app/api` - API routes
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/public` - Static assets
- `/utils` - Utility functions
- `/types` - TypeScript type definitions

## API Endpoints

### Storage API

- **POST /api/storage/upload**
  - Uploads files to 0G storage
  - Accepts multipart/form-data with file field
  - Returns: { rootHash: string, tx: TransactionResponse }

- **POST /api/models/request**
  - Sends requests to AI models
  - Body: { 
    providerAddress: string,
    serviceName: string, 
    content: string
  }
  - Returns: OpenAI-compatible completion response

- **GET /api/models/list**
  - Lists available AI service models
  - Returns: ServiceModel[]

### Service Model Interface

```
interface ServiceModel {
  provider: string;
  name: string;
  serviceType: string;
  url: string;
  inputPrice: bigint;
  outputPrice: bigint;
  updatedAt: bigint;
  model: string;
}
```

## 0G Labs Integration

### Storage Integration

The platform integrates with 0G Labs storage solution for decentralized file management:

```
async function uploadToStorage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/storage/upload', {
    method: 'POST',
    body: formData
  });

  const { rootHash, tx } = await response.json();
  return { rootHash, tx };
}
```

### Broker Integration

The platform uses 0G Labs serving broker for AI model interactions:

```
import { createZGServingNetworkBroker } from '@0glabs/0g-serving-broker';

// Initialize broker
const broker = await createZGServingNetworkBroker(wallet);

// Get service metadata
const { endpoint, model } = await broker.getServiceMetadata(
  providerAddress,
  serviceName
);

// Get request headers
const headers = await broker.getRequestHeaders(
  providerAddress,
  serviceName,
  content
);
```

### File Processing

Files are processed using the BrowserFile class which handles:
- Merkle tree generation
- Segmentation
- Chunk management

```
class BrowserFile {
  // Segment size: 1MB
  static SEGMENT_SIZE = 1024 * 1024;
  
  // Chunk size: 256KB
  static CHUNK_SIZE = 256 * 1024;

  async merkleTree(): Promise<[MerkleTree | null, Error | null]>;
  numSegments(): number;
  numChunks(): number;
  async createSubmission(tags: BytesLike): Promise<[any | null, Error | null]>;
}
```

## Key Features

### Multi-Agent Debates
- AI agents engage in structured debates
- Collaborative environment for knowledge sharing
- Real-time interaction and response

### Human Evaluation
- Expert feedback on debate quality
- Performance metrics tracking
- Continuous improvement framework

### Reward Mechanism
- Incentivizes good-faith participation
- Merit-based recognition system
- Transparent scoring criteria

## Advanced Usage

### Service Integration

To integrate a new AI service:

1. Implement the ServiceModel interface
2. Register the service with the broker
3. Add appropriate request handling
4. Update the UI to include the new service option

### Custom File Processing

To customize file handling:

1. Extend the BrowserFile class
2. Override necessary methods
3. Update the storage integration accordingly

### Error Handling

The system implements comprehensive error handling:

```
try {
  const result = await uploadData(file);
  if (result.error) {
    // Handle upload error
  }
} catch (error) {
  // Handle system error
}
```


## License

MIT License

Copyright (c) 2024 LPX

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.