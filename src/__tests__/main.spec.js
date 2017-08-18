/* global describe, it, expect, xit */
import NifValidator from '../main.js'

const invalidNifs = [
  'AAAAAAAAA',
  '999999999',
  'BBBBB',
  '1',
  '93471790C0'
  // '00000000T' this is valid
]

const validDNIs = [
  '93471790C',
  '43596386R',
  '00000010X'
]

const validNIF = 'K9514336H'
const invalidNIF = 'M3118299M'

const invalidDNIs = [
  '93471790A',
  '43596386B',
  '00000010Y'
]

const validNIEs = [
  'X5102754C',
  'Z8327649K',
  'Y4174455S'
]

const invalidNIEs = [
  'X5102754A',
  'Z8327649B',
  'Y4174455C'
]

describe('DNI/NIE/CIF DocumentId test suite', () => {
  describe('isValid', () => {
    it('should return false if non valid id Numbers', () => {
      invalidNifs.map((id) => {
        expect(NifValidator.isValid(id)).toBeFalsy()
      })
    })

    it('should return true if valid DNI', () => {
      validDNIs.map((id) => {
        expect(NifValidator.isValid(id)).toBeTruthy()
      })
    })

    xit('should return false if not a valid DNI', () => {
      invalidDNIs.map((id) => {
        expect(NifValidator.isValid(id)).toBeFalsy()
      })
    })

    it('should return true if valid NIE', () => {
      validNIEs.map((id) => {
        expect(NifValidator.isValid(id)).toBeTruthy()
      })
    })

    xit('should return false if non valid NIE', () => {
      invalidNIEs.map((id) => {
        expect(NifValidator.isValid(id)).toBeFalsy()
      })
    })

    it('should return true if NIF is valid', () => {
      expect(NifValidator.isValid(validNIF)).toBeTruthy()
    })

    it('should return false if NIF is not valid', () => {
      expect(NifValidator.isValid(invalidNIF)).toBeFalsy()
    })
  })
})
