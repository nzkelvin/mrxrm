using Microsoft.Xrm.Client;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mrxrm.Crm2016.PluginDemo
{
    public static class CrmExtensions
    {
        /// <summary>
        /// Sample usage: Use this method to merge a pre-image entity to a target entity
        /// in order to produce a post-image equivalent.
        /// </summary>
        /// <param name="baseEntity"></param>
        /// <param name="deltaEntity"></param>
        /// <returns></returns>
        public static Entity MergeWith(this Entity baseEntity, Entity deltaEntity)
        {
            Entity baseClone = baseEntity.Clone(false); // Don't clone related entities.

            // The delta entity should only include attribute changed.
            foreach (var attr in deltaEntity.Attributes)
            {
                var attrKey = attr.Key;
                baseClone.Attributes[attrKey] = attr.Value;
            }

            return baseClone;
        }
    }
}
