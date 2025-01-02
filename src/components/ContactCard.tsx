import React from 'react'
import * as S from './styles'

type ContactProps = {
  id: number
  name: string
  email: string
  phone: string
}

type ContactCardProps = {
  contact: ContactProps
  onRemove: (id: number) => void
  onEdit: (contact: ContactProps) => void
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onRemove,
  onEdit
}) => {
  return (
    <S.Card>
      <S.ContactInfo>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </S.ContactInfo>
      <S.ButtonContainer>
        <button onClick={() => onEdit(contact)}>Editar</button>
        <button onClick={() => onRemove(contact.id)}>Apagar</button>
      </S.ButtonContainer>
    </S.Card>
  )
}

export default ContactCard
