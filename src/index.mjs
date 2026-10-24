import assert from 'node:assert/strict';
import { generateAppSecretKey, createToken } from '@x12i/authix-core';
import { createAuthixTokenVerifier, hasFeature } from '@x12i/authix-sdk';

const appSecretKey = generateAppSecretKey();
const { token } = createToken({ appId: 'demo', appSecretKey, subject: { identityId: 'user-1', identityType: 'user' }, features: [{ featureId: 'demo.read', enabled: true }], issuer: 'authix', expiresInSeconds: 300 });
const verifier = createAuthixTokenVerifier({ appId: 'demo', appSecretKey, issuer: 'authix', keyVersion: 1 });
const payload = await verifier.assertValid(token);
assert.equal(payload.subject.identityId, 'user-1');
assert.equal(hasFeature(payload, 'demo.read'), true);
await assert.rejects(() => verifier.assertValid('invalid-token'));
console.log({ subject: payload.subject, canRead: hasFeature(payload, 'demo.read') });
// This local check verifies cryptography and claims; no remote revocation endpoint is configured.
