/*******************************************************************************
 * Copyright (c) 2013-2017 University of Stuttgart
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *    Oliver Kopp - initial code generation using vhudson-jaxb-ri-2.1-2
 *******************************************************************************/

package org.eclipse.winery.model.tosca;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAnyElement;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlIDREF;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.w3c.dom.Element;


/**
 * <p>Java class for tRelationshipTemplate complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="tRelationshipTemplate">
 *   &lt;complexContent>
 *     &lt;extension base="{http://docs.oasis-open.org/tosca/ns/2011/12}tEntityTemplate">
 *       &lt;sequence>
 *         &lt;element name="SourceElement">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;attribute name="ref" use="required" type="{http://www.w3.org/2001/XMLSchema}IDREF" />
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="TargetElement">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;attribute name="ref" use="required" type="{http://www.w3.org/2001/XMLSchema}IDREF" />
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="RelationshipConstraints" minOccurs="0">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="RelationshipConstraint" maxOccurs="unbounded">
 *                     &lt;complexType>
 *                       &lt;complexContent>
 *                         &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                           &lt;sequence>
 *                             &lt;any processContents='lax' namespace='##other' minOccurs="0"/>
 *                           &lt;/sequence>
 *                           &lt;attribute name="constraintType" use="required" type="{http://www.w3.org/2001/XMLSchema}anyURI"
 * />
 *                         &lt;/restriction>
 *                       &lt;/complexContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *       &lt;attribute name="name" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;anyAttribute processContents='lax' namespace='##other'/>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "tRelationshipTemplate", propOrder = {
		"sourceElement",
		"targetElement",
		"relationshipConstraints"
})
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TRelationshipTemplate
		extends TEntityTemplate {

	@XmlElement(name = "SourceElement", required = true)
	protected TRelationshipTemplate.SourceElement sourceElement;
	@XmlElement(name = "TargetElement", required = true)
	protected TRelationshipTemplate.TargetElement targetElement;
	@XmlElement(name = "RelationshipConstraints")
	protected TRelationshipTemplate.RelationshipConstraints relationshipConstraints;
	@XmlAttribute(name = "name")
	protected String name;

	/**
	 * Gets the value of the sourceElement property.
	 *
	 * @return possible object is {@link TRelationshipTemplate.SourceElement }
	 */
	public TRelationshipTemplate.SourceElement getSourceElement() {
		return sourceElement;
	}

	/**
	 * Sets the value of the sourceElement property.
	 *
	 * @param value allowed object is {@link TRelationshipTemplate.SourceElement }
	 */
	public void setSourceElement(TRelationshipTemplate.SourceElement value) {
		this.sourceElement = value;
	}

	/**
	 * Gets the value of the targetElement property.
	 *
	 * @return possible object is {@link TRelationshipTemplate.TargetElement }
	 */
	public TRelationshipTemplate.TargetElement getTargetElement() {
		return targetElement;
	}

	/**
	 * Sets the value of the targetElement property.
	 *
	 * @param value allowed object is {@link TRelationshipTemplate.TargetElement }
	 */
	public void setTargetElement(TRelationshipTemplate.TargetElement value) {
		this.targetElement = value;
	}

	/**
	 * Gets the value of the relationshipConstraints property.
	 *
	 * @return possible object is {@link TRelationshipTemplate.RelationshipConstraints }
	 */
	public TRelationshipTemplate.RelationshipConstraints getRelationshipConstraints() {
		return relationshipConstraints;
	}

	/**
	 * Sets the value of the relationshipConstraints property.
	 *
	 * @param value allowed object is {@link TRelationshipTemplate.RelationshipConstraints }
	 */
	public void setRelationshipConstraints(TRelationshipTemplate.RelationshipConstraints value) {
		this.relationshipConstraints = value;
	}

	/**
	 * Gets the value of the name property.
	 *
	 * @return possible object is {@link String }
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the value of the name property.
	 *
	 * @param value allowed object is {@link String }
	 */
	public void setName(String value) {
		this.name = value;
	}


	/**
	 * <p>Java class for anonymous complex type.
	 *
	 * <p>The following schema fragment specifies the expected content contained within this class.
	 *
	 * <pre>
	 * &lt;complexType>
	 *   &lt;complexContent>
	 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
	 *       &lt;sequence>
	 *         &lt;element name="RelationshipConstraint" maxOccurs="unbounded">
	 *           &lt;complexType>
	 *             &lt;complexContent>
	 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
	 *                 &lt;sequence>
	 *                   &lt;any processContents='lax' namespace='##other' minOccurs="0"/>
	 *                 &lt;/sequence>
	 *                 &lt;attribute name="constraintType" use="required" type="{http://www.w3.org/2001/XMLSchema}anyURI"
	 * />
	 *               &lt;/restriction>
	 *             &lt;/complexContent>
	 *           &lt;/complexType>
	 *         &lt;/element>
	 *       &lt;/sequence>
	 *     &lt;/restriction>
	 *   &lt;/complexContent>
	 * &lt;/complexType>
	 * </pre>
	 */
	@XmlAccessorType(XmlAccessType.FIELD)
	@XmlType(name = "", propOrder = {
			"relationshipConstraint"
	})
	public static class RelationshipConstraints {

		@XmlElement(name = "RelationshipConstraint", required = true)
		protected List<TRelationshipTemplate.RelationshipConstraints.RelationshipConstraint> relationshipConstraint;

		/**
		 * Gets the value of the relationshipConstraint property.
		 *
		 * <p>
		 * This accessor method returns a reference to the live list,
		 * not a snapshot. Therefore any modification you make to the
		 * returned list will be present inside the JAXB object.
		 * This is why there is not a <CODE>set</CODE> method for the relationshipConstraint property.
		 *
		 * <p>
		 * For example, to add a new item, do as follows:
		 * <pre>
		 *    getRelationshipConstraint().add(newItem);
		 * </pre>
		 *
		 *
		 * <p>
		 * Objects of the following type(s) are allowed in the list
		 * {@link TRelationshipTemplate.RelationshipConstraints.RelationshipConstraint }
		 */
		public List<TRelationshipTemplate.RelationshipConstraints.RelationshipConstraint> getRelationshipConstraint() {
			if (relationshipConstraint == null) {
				relationshipConstraint = new ArrayList<TRelationshipTemplate.RelationshipConstraints.RelationshipConstraint>();
			}
			return this.relationshipConstraint;
		}


		/**
		 * <p>Java class for anonymous complex type.
		 *
		 * <p>The following schema fragment specifies the expected content contained within this class.
		 *
		 * <pre>
		 * &lt;complexType>
		 *   &lt;complexContent>
		 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
		 *       &lt;sequence>
		 *         &lt;any processContents='lax' namespace='##other' minOccurs="0"/>
		 *       &lt;/sequence>
		 *       &lt;attribute name="constraintType" use="required" type="{http://www.w3.org/2001/XMLSchema}anyURI" />
		 *     &lt;/restriction>
		 *   &lt;/complexContent>
		 * &lt;/complexType>
		 * </pre>
		 */
		@XmlAccessorType(XmlAccessType.FIELD)
		@XmlType(name = "", propOrder = {
				"any"
		})
		public static class RelationshipConstraint {

			@XmlAnyElement(lax = true)
			protected Object any;
			@XmlAttribute(name = "constraintType", required = true)
			@XmlSchemaType(name = "anyURI")
			protected String constraintType;

			/**
			 * Gets the value of the any property.
			 *
			 * @return possible object is {@link Element } {@link Object }
			 */
			public Object getAny() {
				return any;
			}

			/**
			 * Sets the value of the any property.
			 *
			 * @param value allowed object is {@link Element } {@link Object }
			 */
			public void setAny(Object value) {
				this.any = value;
			}

			/**
			 * Gets the value of the constraintType property.
			 *
			 * @return possible object is {@link String }
			 */
			public String getConstraintType() {
				return constraintType;
			}

			/**
			 * Sets the value of the constraintType property.
			 *
			 * @param value allowed object is {@link String }
			 */
			public void setConstraintType(String value) {
				this.constraintType = value;
			}
		}
	}


	/**
	 * <p>Java class for anonymous complex type.
	 *
	 * <p>The following schema fragment specifies the expected content contained within this class.
	 *
	 * <pre>
	 * &lt;complexType>
	 *   &lt;complexContent>
	 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
	 *       &lt;attribute name="ref" use="required" type="{http://www.w3.org/2001/XMLSchema}IDREF" />
	 *     &lt;/restriction>
	 *   &lt;/complexContent>
	 * &lt;/complexType>
	 * </pre>
	 */
	@XmlAccessorType(XmlAccessType.FIELD)
	@XmlType(name = "")
	public static class SourceElement {

		@XmlAttribute(name = "ref", required = true)
		@XmlIDREF
		@XmlSchemaType(name = "IDREF")
		protected Object ref;

		/**
		 * Gets the value of the ref property.
		 *
		 * @return possible object is {@link Object }
		 */
		public Object getRef() {
			return ref;
		}

		/**
		 * Sets the value of the ref property.
		 *
		 * @param value allowed object is {@link Object }
		 */
		public void setRef(Object value) {
			this.ref = value;
		}
	}


	/**
	 * <p>Java class for anonymous complex type.
	 *
	 * <p>The following schema fragment specifies the expected content contained within this class.
	 *
	 * <pre>
	 * &lt;complexType>
	 *   &lt;complexContent>
	 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
	 *       &lt;attribute name="ref" use="required" type="{http://www.w3.org/2001/XMLSchema}IDREF" />
	 *     &lt;/restriction>
	 *   &lt;/complexContent>
	 * &lt;/complexType>
	 * </pre>
	 */
	@XmlAccessorType(XmlAccessType.FIELD)
	@XmlType(name = "")
	public static class TargetElement {

		@XmlAttribute(name = "ref", required = true)
		@XmlIDREF
		@XmlSchemaType(name = "IDREF")
		protected Object ref;

		/**
		 * Gets the value of the ref property.
		 *
		 * @return possible object is {@link Object }
		 */
		public Object getRef() {
			return ref;
		}

		/**
		 * Sets the value of the ref property.
		 *
		 * @param value allowed object is {@link Object }
		 */
		public void setRef(Object value) {
			this.ref = value;
		}
	}
}
