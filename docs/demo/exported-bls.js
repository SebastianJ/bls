function define_exported_bls(mod) {
_blsInit = mod.cwrap('blsInit', 'number', ['number', 'number', ])
_blsInitNotThreadSafe = mod.cwrap('blsInitNotThreadSafe', 'number', ['number', 'number', ])
blsGetOpUnitSize = mod.cwrap('blsGetOpUnitSize', 'number', [])
_blsGetCurveOrder = mod.cwrap('blsGetCurveOrder', 'number', ['number', 'number', ])
_blsGetFieldOrder = mod.cwrap('blsGetFieldOrder', 'number', ['number', 'number', ])
blsGetGeneratorOfG2 = mod.cwrap('blsGetGeneratorOfG2', 'null', ['number', ])
blsIdSetInt = mod.cwrap('blsIdSetInt', 'null', ['number', 'number', ])
_blsIdSetDecStr = mod.cwrap('blsIdSetDecStr', 'number', ['number', 'number', 'number', ])
_blsIdSetHexStr = mod.cwrap('blsIdSetHexStr', 'number', ['number', 'number', 'number', ])
_blsIdGetDecStr = mod.cwrap('blsIdGetDecStr', 'number', ['number', 'number', 'number', ])
_blsIdGetHexStr = mod.cwrap('blsIdGetHexStr', 'number', ['number', 'number', 'number', ])
_blsIdSerialize = mod.cwrap('blsIdSerialize', 'number', ['number', 'number', 'number', ])
_blsSecretKeySerialize = mod.cwrap('blsSecretKeySerialize', 'number', ['number', 'number', 'number', ])
_blsPublicKeySerialize = mod.cwrap('blsPublicKeySerialize', 'number', ['number', 'number', 'number', ])
_blsSignatureSerialize = mod.cwrap('blsSignatureSerialize', 'number', ['number', 'number', 'number', ])
_blsIdDeserialize = mod.cwrap('blsIdDeserialize', 'number', ['number', 'number', 'number', ])
_blsSecretKeyDeserialize = mod.cwrap('blsSecretKeyDeserialize', 'number', ['number', 'number', 'number', ])
_blsPublicKeyDeserialize = mod.cwrap('blsPublicKeyDeserialize', 'number', ['number', 'number', 'number', ])
_blsSignatureDeserialize = mod.cwrap('blsSignatureDeserialize', 'number', ['number', 'number', 'number', ])
blsIdIsEqual = mod.cwrap('blsIdIsEqual', 'number', ['number', 'number', ])
blsSecretKeyIsEqual = mod.cwrap('blsSecretKeyIsEqual', 'number', ['number', 'number', ])
blsPublicKeyIsEqual = mod.cwrap('blsPublicKeyIsEqual', 'number', ['number', 'number', ])
_blsSignatureIsEqual = mod.cwrap('blsSignatureIsEqual', 'number', ['number', 'number', ])
blsSecretKeyAdd = mod.cwrap('blsSecretKeyAdd', 'null', ['number', 'number', ])
blsPublicKeyAdd = mod.cwrap('blsPublicKeyAdd', 'null', ['number', 'number', ])
_blsSignatureAdd = mod.cwrap('blsSignatureAdd', 'null', ['number', 'number', ])
_blsHashToSecretKey = mod.cwrap('blsHashToSecretKey', 'number', ['number', 'number', 'number', ])
blsSecretKeySetByCSPRNG = mod.cwrap('blsSecretKeySetByCSPRNG', 'number', ['number', ])
blsGetPublicKey = mod.cwrap('blsGetPublicKey', 'null', ['number', 'number', ])
blsGetPop = mod.cwrap('blsGetPop', 'null', ['number', 'number', ])
_blsSecretKeyShare = mod.cwrap('blsSecretKeyShare', 'number', ['number', 'number', 'number', 'number', ])
_blsPublicKeyShare = mod.cwrap('blsPublicKeyShare', 'number', ['number', 'number', 'number', 'number', ])
_blsSecretKeyRecover = mod.cwrap('blsSecretKeyRecover', 'number', ['number', 'number', 'number', 'number', ])
_blsPublicKeyRecover = mod.cwrap('blsPublicKeyRecover', 'number', ['number', 'number', 'number', 'number', ])
_blsSignatureRecover = mod.cwrap('blsSignatureRecover', 'number', ['number', 'number', 'number', 'number', ])
_blsSign = mod.cwrap('blsSign', 'null', ['number', 'number', 'number', 'number', ])
_blsVerify = mod.cwrap('blsVerify', 'number', ['number', 'number', 'number', 'number', ])
_blsVerifyPop = mod.cwrap('blsVerifyPop', 'number', ['number', 'number', ])
_blsIdSetLittleEndian = mod.cwrap('blsIdSetLittleEndian', 'number', ['number', 'number', 'number', ])
_blsIdGetLittleEndian = mod.cwrap('blsIdGetLittleEndian', 'number', ['number', 'number', 'number', ])
_blsSecretKeySetLittleEndian = mod.cwrap('blsSecretKeySetLittleEndian', 'number', ['number', 'number', 'number', ])
_blsSecretKeySetDecStr = mod.cwrap('blsSecretKeySetDecStr', 'number', ['number', 'number', 'number', ])
_blsSecretKeySetHexStr = mod.cwrap('blsSecretKeySetHexStr', 'number', ['number', 'number', 'number', ])
_blsSecretKeyGetLittleEndian = mod.cwrap('blsSecretKeyGetLittleEndian', 'number', ['number', 'number', 'number', ])
_blsSecretKeyGetDecStr = mod.cwrap('blsSecretKeyGetDecStr', 'number', ['number', 'number', 'number', ])
_blsSecretKeyGetHexStr = mod.cwrap('blsSecretKeyGetHexStr', 'number', ['number', 'number', 'number', ])
_blsPublicKeySetHexStr = mod.cwrap('blsPublicKeySetHexStr', 'number', ['number', 'number', 'number', ])
_blsPublicKeyGetHexStr = mod.cwrap('blsPublicKeyGetHexStr', 'number', ['number', 'number', 'number', ])
_blsSignatureSetHexStr = mod.cwrap('blsSignatureSetHexStr', 'number', ['number', 'number', 'number', ])
_blsSignatureGetHexStr = mod.cwrap('blsSignatureGetHexStr', 'number', ['number', 'number', 'number', ])
blsDHKeyExchange = mod.cwrap('blsDHKeyExchange', 'null', ['number', 'number', 'number', ])
mclBn_setErrFile = mod.cwrap('mclBn_setErrFile', 'number', ['number', ])
_mclBn_init = mod.cwrap('mclBn_init', 'number', ['number', 'number', ])
mclBn_getOpUnitSize = mod.cwrap('mclBn_getOpUnitSize', 'number', [])
mclBn_getCurveOrder = mod.cwrap('mclBn_getCurveOrder', 'number', ['number', 'number', ])
mclBn_getFieldOrder = mod.cwrap('mclBn_getFieldOrder', 'number', ['number', 'number', ])
mclBnFr_clear = mod.cwrap('mclBnFr_clear', 'null', ['number', ])
mclBnFr_setInt = mod.cwrap('mclBnFr_setInt', 'null', ['number', 'number', ])
_mclBnFr_setStr = mod.cwrap('mclBnFr_setStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnFr_deserialize = mod.cwrap('mclBnFr_deserialize', 'number', ['number', 'number', 'number', ])
_mclBnFr_setLittleEndian = mod.cwrap('mclBnFr_setLittleEndian', 'number', ['number', 'number', 'number', ])
mclBnFr_isValid = mod.cwrap('mclBnFr_isValid', 'number', ['number', ])
mclBnFr_isEqual = mod.cwrap('mclBnFr_isEqual', 'number', ['number', 'number', ])
mclBnFr_isZero = mod.cwrap('mclBnFr_isZero', 'number', ['number', ])
mclBnFr_isOne = mod.cwrap('mclBnFr_isOne', 'number', ['number', ])
mclBnFr_setByCSPRNG = mod.cwrap('mclBnFr_setByCSPRNG', 'number', ['number', ])
_mclBnFr_setHashOf = mod.cwrap('mclBnFr_setHashOf', 'number', ['number', 'number', 'number', ])
_mclBnFr_getStr = mod.cwrap('mclBnFr_getStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnFr_serialize = mod.cwrap('mclBnFr_serialize', 'number', ['number', 'number', 'number', ])
mclBnFr_neg = mod.cwrap('mclBnFr_neg', 'null', ['number', 'number', ])
mclBnFr_inv = mod.cwrap('mclBnFr_inv', 'null', ['number', 'number', ])
mclBnFr_add = mod.cwrap('mclBnFr_add', 'null', ['number', 'number', 'number', ])
mclBnFr_sub = mod.cwrap('mclBnFr_sub', 'null', ['number', 'number', 'number', ])
mclBnFr_mul = mod.cwrap('mclBnFr_mul', 'null', ['number', 'number', 'number', ])
mclBnFr_div = mod.cwrap('mclBnFr_div', 'null', ['number', 'number', 'number', ])
mclBnG1_clear = mod.cwrap('mclBnG1_clear', 'null', ['number', ])
_mclBnG1_setStr = mod.cwrap('mclBnG1_setStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnG1_deserialize = mod.cwrap('mclBnG1_deserialize', 'number', ['number', 'number', 'number', ])
mclBnG1_isValid = mod.cwrap('mclBnG1_isValid', 'number', ['number', ])
mclBnG1_isEqual = mod.cwrap('mclBnG1_isEqual', 'number', ['number', 'number', ])
mclBnG1_isZero = mod.cwrap('mclBnG1_isZero', 'number', ['number', ])
_mclBnG1_hashAndMapTo = mod.cwrap('mclBnG1_hashAndMapTo', 'number', ['number', 'number', 'number', ])
_mclBnG1_getStr = mod.cwrap('mclBnG1_getStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnG1_serialize = mod.cwrap('mclBnG1_serialize', 'number', ['number', 'number', 'number', ])
mclBnG1_neg = mod.cwrap('mclBnG1_neg', 'null', ['number', 'number', ])
mclBnG1_dbl = mod.cwrap('mclBnG1_dbl', 'null', ['number', 'number', ])
mclBnG1_add = mod.cwrap('mclBnG1_add', 'null', ['number', 'number', 'number', ])
mclBnG1_sub = mod.cwrap('mclBnG1_sub', 'null', ['number', 'number', 'number', ])
mclBnG1_mul = mod.cwrap('mclBnG1_mul', 'null', ['number', 'number', 'number', ])
mclBnG1_mulCT = mod.cwrap('mclBnG1_mulCT', 'null', ['number', 'number', 'number', ])
mclBnG2_clear = mod.cwrap('mclBnG2_clear', 'null', ['number', ])
_mclBnG2_setStr = mod.cwrap('mclBnG2_setStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnG2_deserialize = mod.cwrap('mclBnG2_deserialize', 'number', ['number', 'number', 'number', ])
mclBnG2_isValid = mod.cwrap('mclBnG2_isValid', 'number', ['number', ])
mclBnG2_isEqual = mod.cwrap('mclBnG2_isEqual', 'number', ['number', 'number', ])
mclBnG2_isZero = mod.cwrap('mclBnG2_isZero', 'number', ['number', ])
_mclBnG2_hashAndMapTo = mod.cwrap('mclBnG2_hashAndMapTo', 'number', ['number', 'number', 'number', ])
_mclBnG2_getStr = mod.cwrap('mclBnG2_getStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnG2_serialize = mod.cwrap('mclBnG2_serialize', 'number', ['number', 'number', 'number', ])
mclBnG2_neg = mod.cwrap('mclBnG2_neg', 'null', ['number', 'number', ])
mclBnG2_dbl = mod.cwrap('mclBnG2_dbl', 'null', ['number', 'number', ])
mclBnG2_add = mod.cwrap('mclBnG2_add', 'null', ['number', 'number', 'number', ])
mclBnG2_sub = mod.cwrap('mclBnG2_sub', 'null', ['number', 'number', 'number', ])
mclBnG2_mul = mod.cwrap('mclBnG2_mul', 'null', ['number', 'number', 'number', ])
mclBnG2_mulCT = mod.cwrap('mclBnG2_mulCT', 'null', ['number', 'number', 'number', ])
mclBnGT_clear = mod.cwrap('mclBnGT_clear', 'null', ['number', ])
mclBnGT_setInt = mod.cwrap('mclBnGT_setInt', 'null', ['number', 'number', ])
_mclBnGT_setStr = mod.cwrap('mclBnGT_setStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnGT_deserialize = mod.cwrap('mclBnGT_deserialize', 'number', ['number', 'number', 'number', ])
mclBnGT_isEqual = mod.cwrap('mclBnGT_isEqual', 'number', ['number', 'number', ])
mclBnGT_isZero = mod.cwrap('mclBnGT_isZero', 'number', ['number', ])
mclBnGT_isOne = mod.cwrap('mclBnGT_isOne', 'number', ['number', ])
_mclBnGT_getStr = mod.cwrap('mclBnGT_getStr', 'number', ['number', 'number', 'number', 'number', ])
_mclBnGT_serialize = mod.cwrap('mclBnGT_serialize', 'number', ['number', 'number', 'number', ])
mclBnGT_neg = mod.cwrap('mclBnGT_neg', 'null', ['number', 'number', ])
mclBnGT_inv = mod.cwrap('mclBnGT_inv', 'null', ['number', 'number', ])
mclBnGT_add = mod.cwrap('mclBnGT_add', 'null', ['number', 'number', 'number', ])
mclBnGT_sub = mod.cwrap('mclBnGT_sub', 'null', ['number', 'number', 'number', ])
mclBnGT_mul = mod.cwrap('mclBnGT_mul', 'null', ['number', 'number', 'number', ])
mclBnGT_div = mod.cwrap('mclBnGT_div', 'null', ['number', 'number', 'number', ])
mclBnGT_powGeneric = mod.cwrap('mclBnGT_powGeneric', 'null', ['number', 'number', 'number', ])
mclBnGT_pow = mod.cwrap('mclBnGT_pow', 'null', ['number', 'number', 'number', ])
mclBn_pairing = mod.cwrap('mclBn_pairing', 'null', ['number', 'number', 'number', ])
mclBn_finalExp = mod.cwrap('mclBn_finalExp', 'null', ['number', 'number', ])
mclBn_millerLoop = mod.cwrap('mclBn_millerLoop', 'null', ['number', 'number', 'number', ])
mclBn_getUint64NumToPrecompute = mod.cwrap('mclBn_getUint64NumToPrecompute', 'number', [])
mclBn_precomputeG2 = mod.cwrap('mclBn_precomputeG2', 'null', ['number', 'number', ])
mclBn_precomputedMillerLoop = mod.cwrap('mclBn_precomputedMillerLoop', 'null', ['number', 'number', 'number', ])
mclBn_precomputedMillerLoop2 = mod.cwrap('mclBn_precomputedMillerLoop2', 'null', ['number', 'number', 'number', 'number', 'number', ])
mclBn_FrLagrangeInterpolation = mod.cwrap('mclBn_FrLagrangeInterpolation', 'number', ['number', 'number', 'number', 'number', ])
mclBn_G1LagrangeInterpolation = mod.cwrap('mclBn_G1LagrangeInterpolation', 'number', ['number', 'number', 'number', 'number', ])
mclBn_G2LagrangeInterpolation = mod.cwrap('mclBn_G2LagrangeInterpolation', 'number', ['number', 'number', 'number', 'number', ])
mclBn_FrEvaluatePolynomial = mod.cwrap('mclBn_FrEvaluatePolynomial', 'number', ['number', 'number', 'number', 'number', ])
mclBn_G1EvaluatePolynomial = mod.cwrap('mclBn_G1EvaluatePolynomial', 'number', ['number', 'number', 'number', 'number', ])
mclBn_G2EvaluatePolynomial = mod.cwrap('mclBn_G2EvaluatePolynomial', 'number', ['number', 'number', 'number', 'number', ])
}
