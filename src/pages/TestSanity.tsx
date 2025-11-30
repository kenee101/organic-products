import { useEffect, useState } from "react";
import { testConnection } from "../lib/sanity";

export default function TestSanity() {
  const [status, setStatus] = useState("Testing connection...");
  const [error, setError] = useState(null);
  const [documentCount, _] = useState(null);

  useEffect(() => {
    const testSanity = async () => {
      try {
        const result = await testConnection();
        if (result) {
          setStatus("✅ Connected to Sanity successfully!");
          // You can add more tests here
        } else {
          setStatus("❌ Failed to connect to Sanity");
        }
      } catch (err: any) {
        setError(err.message);
        setStatus("❌ Error during connection test");
      }
    };

    testSanity();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>

        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h2 className="font-semibold mb-2">Status:</h2>
          <p
            className={
              status.includes("✅") ? "text-green-600" : "text-red-600"
            }
          >
            {status}
          </p>

          {documentCount !== null && (
            <div className="mt-2">
              <p>
                Total documents in dataset: <strong>{documentCount}</strong>
              </p>
            </div>
          )}
        </div>

        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <h3 className="font-bold">Error Details:</h3>
            <pre className="whitespace-pre-wrap mt-2 text-sm">{error}</pre>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold mb-2">Environment Variables:</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-mono bg-gray-100 px-1 rounded">
                VITE_SANITY_PROJECT_ID
              </span>
              :
              {import.meta.env.VITE_SANITY_PROJECT_ID ? "✅ Set" : "❌ Not set"}
            </p>
            <p>
              <span className="font-mono bg-gray-100 px-1 rounded">
                VITE_SANITY_API_TOKEN
              </span>
              :{import.meta.env.VITE_SANITY_API_TOKEN ? "✅ Set" : "❌ Not set"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
