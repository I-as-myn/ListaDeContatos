import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addContact, removeContact, editContact } from '../redux/contactsSlice'
import ContactCard from '../components/ContactCard'
import * as S from './styles'

const ContactsPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [editingContact, setEditingContact] = useState<number | null>(null)

  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const formatPhone = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '')

    if (onlyNumbers.length <= 10) {
      return onlyNumbers
        .replace(/(\d{2})(\d{0,5})?(\d{0,4})?/, '($1) $2-$3')
        .trim()
    } else {
      return onlyNumbers
        .substring(0, 11)
        .replace(/(\d{2})(\d{0,5})?(\d{0,4})?/, '($1) $2-$3')
        .trim()
    }
  }

  const handleAddContact = () => {
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os campos.')
      return
    }
    if (editingContact !== null) {
      dispatch(
        editContact({
          id: editingContact,
          uptadeContact: { name, email, phone }
        })
      )
      setEditingContact(null)
    } else {
      dispatch(addContact({ id: Date.now(), name, email, phone }))
    }
    setName('')
    setEmail('')
    setPhone('')
  }

  const handleEditContact = (contact: {
    id: number
    name: string
    email: string
    phone: string
  }) => {
    setName(contact.name)
    setEmail(contact.email)
    setPhone(contact.phone)
    setEditingContact(contact.id)
  }

  return (
    <S.Container>
      <S.Title>Lista de Contatos</S.Title>
      <S.Form>
        <S.InputField
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.InputField
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
        />
        <S.Button onClick={handleAddContact}>
          {editingContact !== null ? 'Atualizar' : 'Adicionar'} Contato
        </S.Button>
      </S.Form>
      <S.ContactList>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onRemove={(id) => dispatch(removeContact(id))}
            onEdit={handleEditContact}
          />
        ))}
      </S.ContactList>
    </S.Container>
  )
}

export default ContactsPage
